import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { FooterComponent, Header } from "@/widgets";
import { Layout, Spin } from "antd";

const App = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<Suspense
				fallback={
					<Layout>
						<Spin size="large" />
					</Layout>
				}
			>
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
