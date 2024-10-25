import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { Loader } from "@/shared/ui";

const App = () => {
	// useEffect(() => {
	// 	if (user) setAuthData(user);
	// }, [user]);

	// if (isLoading) {
	// 	return <PageLoader />;
	// }

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
