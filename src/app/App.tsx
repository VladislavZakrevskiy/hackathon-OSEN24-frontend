import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { Loader } from "@/shared/ui";

const App = () => {
	return (
		<div>
			<Suspense fallback={<Loader />}>
				<div className="content-page">
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
