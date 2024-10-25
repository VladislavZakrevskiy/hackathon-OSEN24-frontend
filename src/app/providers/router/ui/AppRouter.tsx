import { Suspense, memo, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "../routeConfig/routeConfig";
import { RequireAuth } from "./RequireAuth";
import { AppRouteProps } from "@/shared/types/router";
import { Loader } from "@/shared/ui";

export const AppRouter = memo(() => {
	const renderWithWrapper = useCallback((route: AppRouteProps) => {
		const element = <Suspense fallback={<Loader />}>{route.element}</Suspense>;

		return (
			<Route
				element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
				path={route.path}
				key={route.path}
			/>
		);
	}, []);

	return (
		<Suspense fallback={<Loader />}>
			<Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
		</Suspense>
	);
});
