import { useAppStore } from "@/app/model/AppStore";
import { LogOut, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const { keycloak } = useAppStore();
	const navigate = useNavigate();

	return (
		<div className="flex items-center justify-between w-full p-4 shadow-md bg-gradient-to-r from-green-500 to-green-400">
			<button 
				onClick={() => navigate("/")} 
				className="text-xl font-bold text-white hover:text-gray-200 transition"
			>
				CLINIC
			</button>
			
			<div className="flex items-center gap-4">
				<button 
					className="flex items-center p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition" 
					onClick={() => navigate("/client")}
				>
					<User className="w-5 h-5 text-white" />
					<span className="sr-only">Профиль</span>
				</button>
				
				<button 
					className="flex items-center p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition" 
					onClick={() => navigate("/admin")} 
				>
					<Settings className="w-5 h-5 text-white" />
					<span className="sr-only">Админка</span>
				</button>
				
				<button 
					className="flex items-center p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition" 
					onClick={() => keycloak?.logout()}
				>
					<LogOut className="w-5 h-5 text-white" />
					<span className="sr-only">Выйти</span>
				</button>
			</div>
		</div>
	);
};
