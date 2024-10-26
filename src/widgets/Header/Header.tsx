import { useAppStore } from "@/app/model/AppStore";
import { UserRoles, useUserStore } from "@/entities/User";
import { useGetId } from "@/shared/api/graphql/requests/useGetId";
import { Spin } from "antd";
import { LogOut, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const { keycloak } = useAppStore();
	const { userInfo } = useUserStore();
	const navigate = useNavigate();
	const { isLoading } = useGetId(userInfo?.given_name || "", userInfo?.role || UserRoles.CLIENT);

	return (
		<div className="flex items-center justify-between w-full p-4 shadow-md bg-gradient-to-r from-green-500 to-green-400">
			<button onClick={() => navigate("/")} className="text-xl font-bold text-white hover:text-gray-200 transition">
				CLINIC
			</button>

			<div className="flex items-center gap-4">
				<button
					className="flex items-center justify-center p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition"
					onClick={() => navigate("/client")}
				>
					{isLoading ? (
						<Spin size="small" />
					) : (
						<>
							<User className="w-5 h-5 text-white" />
							<span className="sr-only">Профиль</span>
						</>
					)}
				</button>

				<button
					className="flex items-center p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition"
					onClick={() => navigate("/admin")}
				>
					{isLoading ? (
						<Spin size="small" />
					) : (
						<>
							<Settings className="w-5 h-5 text-white" />
							<span className="sr-only">Админка</span>
						</>
					)}
				</button>

				<button
					className="flex items-center p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition"
					onClick={() => keycloak?.logout()}
				>
					{isLoading ? (
						<Spin size="small" />
					) : (
						<>
							<LogOut className="w-5 h-5 text-white" />
							<span className="sr-only">Выйти</span>
						</>
					)}
				</button>
			</div>
		</div>
	);
};
