import { NotFoundPage } from "@/pages/NotFoundPage";
import { LazyMainPage } from "@/pages/MainPage";
import { AppRoutes, getRouteMain, getRouteNotFound, getRouteUserPage } from "@/shared/consts/router";
import { AppRouteProps } from "@/shared/types/router";
import { LazyUserPage } from "@/pages/UserPage";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <LazyMainPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
	[AppRoutes.USER_PAGE]: {
		authOnly: true,
		path: getRouteUserPage(":type", ":id"),
		element: <LazyUserPage />,
	},
};
