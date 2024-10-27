import { NotFoundPage } from "@/pages/NotFoundPage";
import { LazyMainPage } from "@/pages/MainPage";
import {
	AppRoutes,
	getRouteAdminPage,
	getRouteClientPage,
	getRouteDoctorPage,
	getRouteMain,
	getRouteNotFound,
	getRouteViewClientPage,
	getRouteViewDoctorPage,
} from "@/shared/consts/router";
import { AppRouteProps } from "@/shared/types/router";
import { UserRoles } from "@/entities/User";
import { LazyDoctorPage } from "@/pages/DoctorPage";
import { LazyClientPage } from "@/pages/ClientPage";
import { LazyAdminPage } from "@/pages/AdminPage";
import { LazyClientForViewPage } from "@/pages/ClientForViewPage";
import { LazyDoctorForViewPage } from "@/pages/DoctorForViewPage";

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
		roles: [UserRoles.ADMIN],
		authOnly: true,
		element: <LazyDoctorPage />,
	},
	[AppRoutes.CLIENT_BY_ID]: {
		path: getRouteClientPage(":id"),
		roles: [UserRoles.CLIENT],
		authOnly: true,
		element: <LazyClientPage />,
	},
	[AppRoutes.ADMIN_BY_ID]: {
		path: getRouteAdminPage(),
		authOnly: true,
		roles: [UserRoles.ADMIN],
		element: <LazyAdminPage />,
	},
	[AppRoutes.CLIENT_VIEW]: {
		path: getRouteViewClientPage(":id"),
		element: <LazyClientForViewPage />,
		authOnly: true,
	},
	[AppRoutes.DOCTOR_VIEW]: {
		path: getRouteViewDoctorPage(":id"),
		element: <LazyDoctorForViewPage />,
		authOnly: true,
	},
};
