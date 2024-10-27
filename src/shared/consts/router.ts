export enum AppRoutes {
	MAIN = "main",
	NOT_FOUND = "not_found",
	DOCTOR_BY_ID = "doctor_by_id",
	CLIENT_BY_ID = "client_by_id",
	ADMIN_BY_ID = "admin_by_id",

	CLIENT_VIEW = "client_view",
	DOCTOR_VIEW = 'doctor_view'
}

export const getRouteMain = () => "/";
export const getRouteNotFound = () => "*";
export const getRouteDoctorPage = (id: string) => "/doctor/" + id;
export const getRouteClientPage = (id: string) => "/client/" + id;
export const getRouteViewDoctorPage = (id: string) => "/v/doctor/" + id;
export const getRouteViewClientPage = (id: string) => "/v/client/" + id;
export const getRouteAdminPage = () => "/admin/";
