import { useEffect } from "react";
import { useAppStore } from "@/app/model/AppStore";
import { UserRoles, useUserStore } from "@/entities/User";
import { useGetId } from "@/shared/api/graphql/requests/useGetId";
import { Button, Layout, Spin } from "antd";
import { LogOut, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getRouteAdminPage, getRouteClientPage, getRouteDoctorPage } from "@/shared/consts/router";

export const Header = () => {
	const { keycloak } = useAppStore();
	const { userInfo } = useUserStore();
	const navigate = useNavigate();
	const { entity, isLoading, person } = useGetId(userInfo?.given_name || "", userInfo?.role || UserRoles.CLIENT);
	const id = person?.id || null;

	useEffect(() => {
		console.log("Entity:", entity);
		console.log("ID:", id);
		console.log("Is Loading:", isLoading);
		console.log("Person:", person);
	}, [entity, id, isLoading, person]);

	useEffect(() => {
		if (id && !isLoading) {
			localStorage.setItem("userId", id);
			console.log("User ID saved to localStorage:", id);
		} else if (isLoading) {
			console.log("Loading... ID is not yet available.");
		}
	}, [id, isLoading]);

	const handleAdminNavigation = () => {
		const storedId = localStorage.getItem("userId");
		if (storedId) {
			navigate(getRouteAdminPage());
		} else {
			console.log("User ID not found in localStorage.");
		}
	};

	const handleProfileNavigation = () => {
		switch (userInfo?.role) {
			case UserRoles.CLIENT:
				navigate(getRouteClientPage((person?.firstName || "") + (person?.lastName || "")));
				break;
			case UserRoles.DOCTOR:
				navigate(getRouteDoctorPage((person?.firstName || "") + (person?.lastName || "")));
				break;
			case UserRoles.ADMIN:
				navigate(getRouteAdminPage());
				break;
		}
	};

	return (
		<Layout.Header className="flex justify-between items-center">
			<Button
				size="large"
				onClick={() => navigate("/")}
				className="text-xl font-bold text-white hover:text-gray-200 transition"
			>
				CLINIC
			</Button>

			<div className="flex items-center gap-4">
				<Button onClick={handleProfileNavigation}>
					{isLoading ? (
						<Spin size="small" />
					) : (
						<>
							<User className="w-5 h-5 text-white" />
							<span className="sr-only">Профиль</span>
						</>
					)}
				</Button>

				<Button onClick={handleAdminNavigation}>
					{isLoading ? (
						<Spin size="small" />
					) : (
						<>
							<Settings className="w-5 h-5 text-white" />
							<span className="sr-only">Админка</span>
						</>
					)}
				</Button>

				<Button onClick={() => keycloak?.logout()}>
					{isLoading ? (
						<Spin size="small" />
					) : (
						<>
							<LogOut className="w-5 h-5 text-white" />
							<span className="sr-only">Выйти</span>
						</>
					)}
				</Button>
			</div>
		</Layout.Header>
	);
};
