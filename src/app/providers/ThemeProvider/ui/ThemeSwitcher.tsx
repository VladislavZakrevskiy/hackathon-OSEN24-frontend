import { useTheme } from "../model/ThemeStore";
import { Button, Dropdown } from "antd";
import { Sun, Moon, SunMoon } from "lucide-react";

const getIcon = (theme: "dark" | "light" | "system") => {
	switch (theme) {
		case "dark":
			return <Moon className="h-[1.2rem] w-[1.2rem]" />;
		case "light":
			return <Sun className="h-[1.2rem] w-[1.2rem]" />;
		case "system":
			return <SunMoon className="h-[1.2rem] w-[1.2rem]" />;
		default:
			return <Sun className="h-[1.2rem] w-[1.2rem]" />;
	}
};

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<Dropdown
			menu={{
				items: [
					{
						key: "light",
						label: "Light",
						onClick: () => setTheme("light"),
						icon: <Sun className="h-[1.2rem] w-[1.2rem]" />,
					},
					{
						key: "dark",
						label: "Dark",
						onClick: () => setTheme("dark"),
						icon: <Moon className="h-[1.2rem] w-[1.2rem]" />,
					},
					{
						key: "system",
						label: "System",
						onClick: () => setTheme("system"),
						icon: <SunMoon className="h-[1.2rem] w-[1.2rem]" />,
					},
				],
			}}
			placement="bottomRight"
			trigger={["click"]}
		>
			<Button shape="circle" icon={getIcon(theme)} />
		</Dropdown>
	);
}
