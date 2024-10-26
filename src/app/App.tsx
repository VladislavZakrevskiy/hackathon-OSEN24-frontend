import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { FooterComponent, Header } from "@/widgets";
import { Layout, Spin } from "antd";

const App = () => {
	return (
		<Suspense fallback={<Spin size="large" />}>
			<div className="flex flex-col ">
				<Header />
				<Layout>
					<AppRouter />
				</Layout>
				<FooterComponent />
			</div>
		</Suspense>
	);
};

export default App;
