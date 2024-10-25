import { FC, ReactNode, useEffect, useState } from "react";
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from "@apollo/client";
import Keycloak, { KeycloakInstance } from "keycloak-js";
import { cache } from "@/shared/api/graphql/cache";
import { Loader } from "@/shared/ui/Loader";

interface ApiProviderProps {
	children: ReactNode;
}

export const ApiProvider: FC<ApiProviderProps> = ({ children }) => {
	const [keycloak, setKeycloak] = useState<KeycloakInstance>(Keycloak("/keycloak.json"));
	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const [userInfo, setUserInfo] = useState<User>();
	const [apolloClient, setAppoloClient] = useState<ApolloClient<NormalizedCacheObject>>();

	const initClient = async (keycloak: Keycloak.KeycloakInstance) => {
		if (!apolloClient) {
			return new ApolloClient({
				cache: cache,
				uri: process.env.NODE_ENV === "production" ? process.env.DS_ENDPOINT : "/graphql",
				headers: {
					Authorization: "Bearer " + keycloak.token,
				},
			});
		}
	};

	useEffect(() => {
		const appoloClientInit = async (keycloak: Keycloak.KeycloakInstance) => {
			const apolloClient = await initClient(keycloak);

			setAppoloClient(apolloClient);
		};

		keycloak.init({ onLoad: "login-required" }).then(async (auth) => {
			setKeycloak(keycloak);
			setAuthenticated(auth);

			await appoloClientInit(keycloak);

			if (!userInfo) {
				keycloak.loadUserInfo().then((value) => {
					setUserInfo(Object.assign(value, keycloak?.resourceAccess![keycloak.clientId!]));
				});
			}
		});
	}, []);

	console.log("process.env.DS_ENDPOINT:" + process.env.DS_ENDPOINT);

	if (authenticated && userInfo && apolloClient) {
		return <ApolloProvider client={apolloClient!}>{children}</ApolloProvider>;
	}
	return (
		<Loader
			style={{
				margin: 0,
				position: "absolute",
				top: "45%",
				left: "45%",
			}}
		/>
	);
};
