export enum AppRoutes {
	MAIN = "main",
	NOT_FOUND = "not_found",
	DOCTOR_BY_ID = "doctor_by_id",
	CLIENT_BY_ID = "client_by_id",
	ADMIN_BY_ID = "admin_by_id",
}

export const getRouteMain = () => "/";
export const getRouteNotFound = () => "*";
export const getRouteDoctorPage = (id: string) => "/doctor/" + id;
export const getRouteClientPage = (id: string) => "/client/" + id;
export const getRouteAdminPage = (id: string) => "/admin/" + id;
