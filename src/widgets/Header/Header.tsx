import { useAppStore } from "@/app/model/AppStore";
import { LogOut } from "lucide-react";
import React from "react";

export const Header = () => {
	const { keycloak } = useAppStore();

	return (
		<div className="flex items-center ">
			<p>CLINIC</p>
			<button onClick={() => keycloak?.logout()}>
				<LogOut />
			</button>
		</div>
	);
};
