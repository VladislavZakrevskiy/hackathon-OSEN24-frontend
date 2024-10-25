import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import Keycloak, { KeycloakInstance } from "keycloak-js";
import { create } from "zustand";

interface AppState {
	apollo: ApolloClient<NormalizedCacheObject> | null;
	keycloak: KeycloakInstance | null;
}

interface AppAction {
	setApollo: (apollo: ApolloClient<NormalizedCacheObject>) => void;
	setKeycloak: (keycloak: KeycloakInstance) => void;
}

type AppSchema = AppAction & AppState;

export const useAppStore = create<AppSchema>((set) => ({
	apollo: null,
	keycloak: Keycloak("/keycloak.json"),
	setApollo: (apollo) => set(() => ({ apollo })),
	setKeycloak: (keycloak) => set(() => ({ keycloak })),
}));
