import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/shared/config/i18n/i18n";
import "./index.css";
import App from "@/app/App";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { ApiProvider } from "./app/providers/ApiProvider";
import { ThemeProvider } from "./app/providers/ThemeProvider";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
	<BrowserRouter>
		<ApiProvider>
			<ThemeProvider>
				<ErrorBoundary>
					<App />
				</ErrorBoundary>
			</ThemeProvider>
		</ApiProvider>
	</BrowserRouter>,
);
