export enum AppRoutes {
	MAIN = "main",
	NOT_FOUND = "not_found",
	DOCTOR_PAGE = "doctor_page",
	LOGIN = "login",
	REGISTER = "register",
}

export const getRouteMain = () => "/";
export const getRouteDoctor = () => "/doctor";
export const getRouteNotFound = () => "*";
