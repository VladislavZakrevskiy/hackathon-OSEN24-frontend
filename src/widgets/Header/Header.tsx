import { useAppStore } from "@/app/model/AppStore";
import { UserRoles, useUserStore } from "@/entities/User";
import { getRouteUserPage } from "@/shared/consts/router";
// import { ThemeToggle } from "@/app/providers/ThemeProvider";
import { LogOut, User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const { keycloak } = useAppStore();
	const { userInfo } = useUserStore();
	const nav = useNavigate();

	return (
		<div className="flex items-center justify-between w-full ">
			<h3>CLINIC</h3>
			<div className="flex gap-2">
				<button
					onClick={() => nav(getRouteUserPage(userInfo?.roles?.[0] || UserRoles.CLIENT, userInfo?.app?.id || ""))}
				>
					<User2 />
				</button>
				<button onClick={() => keycloak?.logout()}>
					<LogOut />
				</button>
				{/* <ThemeToggle /> */}
			</div>
		</div>
	);
};
