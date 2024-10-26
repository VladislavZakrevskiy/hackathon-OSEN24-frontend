import { UserRoles } from "@/entities/User";

export const getRole = (roles: string[]) => {
	return UserRoles.CLIENT;
};
