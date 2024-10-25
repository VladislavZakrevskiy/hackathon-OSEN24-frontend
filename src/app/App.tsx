import { Suspense, useEffect } from "react";
import { AppRouter } from "./providers/router";
import { PageLoader } from "@/widgets/PageLoader";

const App = () => {
	// useEffect(() => {
	// 	if (user) setAuthData(user);
	// }, [user]);

	// if (isLoading) {
	// 	return <PageLoader />;
	// }

	return (
		<div>
			<Suspense fallback={<PageLoader />}>
				<div className="content-page">
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
