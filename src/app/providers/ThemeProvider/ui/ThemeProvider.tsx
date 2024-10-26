import { ReactNode, useEffect } from "react";
import { useTheme } from "../model/ThemeStore";
import { ConfigProvider, theme as ThemeAndD } from "antd";

type ThemeProviderProps = {
	children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
	const { theme } = useTheme();

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
			root.classList.toggle("dark-theme", systemTheme === "dark");
			return;
		}
		root.classList.toggle("dark-theme", theme === "dark");
	}, [theme]);

	return (
		<ConfigProvider theme={{ algorithm: theme === "dark" ? ThemeAndD.darkAlgorithm : ThemeAndD.darkAlgorithm }}>
			{children}
		</ConfigProvider>
	);
}
