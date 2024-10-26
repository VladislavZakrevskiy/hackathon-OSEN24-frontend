export enum AppRoutes {
	MAIN = "main",
	NOT_FOUND = "not_found",
	DOCTOR_BY_ID = "doctor",
	CLIENT_BY_ID = "client_by_id",
	ADMIN = "admin"
}

export const getRouteMain = () => "/";
export const getRouteNotFound = () => "*";
export const getRouteDoctorPage = (id: string) => "/doctor/" + id;
export const getRouteClientPage = () => "/client" ;
export const getRouteAdminPage = () => "/admin" ;
