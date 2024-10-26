import { NotFoundPage } from "@/pages/NotFoundPage";
import { LazyMainPage } from "@/pages/MainPage";
import { AppRoutes, getRouteDoctor, getRouteMain, getRouteNotFound } from "@/shared/consts/router";
import { AppRouteProps } from "@/shared/types/router";
import { LazyLoginPage } from "@/pages/Login";
import { LazyRegisterPage } from "@/pages/Register";
import { LazyDoctorPage } from "@/pages/DoctorPage";


export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <LazyMainPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
	[AppRoutes.LOGIN]: {
		path: getRouteNotFound(),
		element: <LazyLoginPage />
	},
	[AppRoutes.REGISTER]: {
		path: getRouteDoctor(),
		element: <LazyRegisterPage />
	},
	[AppRoutes.DOCTOR_PAGE]: {
		path: getRouteDoctor(),
		element: <LazyDoctorPage />
	},
};
