import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { Header } from "@/widgets";
import { Layout, Spin } from "antd";

const App = () => {
	return (
		<div>
			<Suspense fallback={<Spin size="large" />}>
				<Header />
				<Layout.Content>
					<AppRouter />
				</Layout.Content>
			</Suspense>
		</div>
	);
};

export default App;
