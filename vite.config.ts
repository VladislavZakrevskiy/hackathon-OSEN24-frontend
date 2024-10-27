import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	define: {
		__IS_DEV__: JSON.stringify(true),
		__API__: JSON.stringify("http://localhost:3000"),
	},
	resolve: {
		alias: [{ find: "@", replacement: "/src" }],
	},
	server: {
		proxy: {
			"/graphql": {
				target: "https://smapi.pv-api.sbc.space/ds-7430345669871992834/graphql",
				secure: false,
				changeOrigin: true,
			},
		},
		port: 3000,
	},
});
