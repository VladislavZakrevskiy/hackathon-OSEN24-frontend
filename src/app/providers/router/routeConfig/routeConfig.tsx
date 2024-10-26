import { NotFoundPage } from "@/pages/NotFoundPage";
import { LazyMainPage } from "@/pages/MainPage";
import {
	AppRoutes,
	getRouteAdminPage,
	getRouteClientPage,
	getRouteDoctorPage,
	getRouteMain,
	getRouteNotFound,
} from "@/shared/consts/router";
import { AppRouteProps } from "@/shared/types/router";
import { UserRoles } from "@/entities/User";
import { LazyDoctorPage } from "@/pages/DoctorPage";
import { LazyClientPage } from "@/pages/ClientPage";
import { LazyAdminPage } from "@/pages/AdminPage";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <LazyMainPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
	[AppRoutes.DOCTOR_BY_ID]: {
		path: getRouteDoctorPage(":id"),
		authOnly: true,
		roles: [UserRoles.DOCTOR],
		element: <LazyDoctorPage />,
	},
	[AppRoutes.CLIENT_BY_ID]: {
		path: getRouteClientPage(),
		authOnly: true,
		roles: [UserRoles.CLIENT],
		element: <LazyClientPage />,
	},
	[AppRoutes.ADMIN]: {
		path: getRouteAdminPage(),
		authOnly: true,
		roles: [UserRoles.CLIENT],
		element: <LazyAdminPage />
	},

	
};
