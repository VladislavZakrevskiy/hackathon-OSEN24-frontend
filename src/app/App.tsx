import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { Loader } from "@/shared/ui";
import { Header } from "@/widgets";
import { Layout } from "antd";

const App = () => {
	return (
		<div>
			<Suspense fallback={<Loader />}>
				<Header />
				<Layout.Content>
					<AppRouter />
				</Layout.Content>
			</Suspense>
		</div>
	);
};

export default App;
