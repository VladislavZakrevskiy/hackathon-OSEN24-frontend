import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { FooterComponent, Header } from "@/widgets";
import { Layout, Spin } from "antd";

const App = () => {
	return (
		<div style={{ minHeight: "100vh" }}>
			<Suspense fallback={<Spin size="large" />}>
				<Header />
				<Layout>
					<AppRouter />
				</Layout>
				<FooterComponent />
			</Suspense>
		</div>
	);
};

export default App;
