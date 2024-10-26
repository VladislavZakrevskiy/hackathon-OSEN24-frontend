import { useAppStore } from "@/app/model/AppStore";
import { ThemeToggle } from "@/app/providers/ThemeProvider";
import { UserRoles, useUserStore } from "@/entities/User";
import { getRouteClientPage, getRouteDoctorPage } from "@/shared/consts/router";
import { Button, Layout, Typography } from "antd";
import { LogOut, User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const { keycloak } = useAppStore();
	const { userInfo } = useUserStore();
	const nav = useNavigate();

	const navByRole = () => {
		switch (userInfo?.role) {
			case UserRoles.ADMIN:
				return nav(getRouteAdminPage());
			case UserRoles.DOCTOR:
				return nav(getRouteDoctorPage());
			case UserRoles.CLIENT:
				return nav(getRouteClientPage());
		}
	};

	return (
		<Layout>
			<Layout.Header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
				<Typography.Title style={{ margin: 0 }}>CLINIC</Typography.Title>
				<div className="flex gap-2">
					<Button onClick={navByRole}>
						<User2 />
					</Button>
					<Button onClick={() => keycloak?.logout()}>
						<LogOut />
					</Button>
					<ThemeToggle />
				</div>
			</Layout.Header>
		</Layout>
	);
};
