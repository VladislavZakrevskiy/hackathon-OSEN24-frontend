import { UserRoles } from "@/entities/User";

export enum AppRoutes {
	MAIN = "main",
	NOT_FOUND = "not_found",
	USER_PAGE = 'user_page'
}

export const getRouteMain = () => "/";
export const getRouteNotFound = () => "*";
export const getRouteUserPage = (type: UserRoles | ":type", id: string) => `/${type}/${id}`;
