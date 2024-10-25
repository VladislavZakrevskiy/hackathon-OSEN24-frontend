import { UserRoles, useUserStore } from "@/entities/User";
import { getRouteMain, getRouteNotFound } from "@/shared/consts/router";
import { FC, ReactNode, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
	children?: ReactNode;
	roles?: UserRoles[];
}

export const RequireAuth: FC<Props> = ({ children, roles }) => {
	const location = useLocation();
	const { userInfo } = useUserStore();
	const userRoles = userInfo?.roles;

	const hasRequiredRoles = useMemo(() => {
		if (!roles) {
			return true;
		}
		return roles.some((requireRole) => (userRoles as UserRoles[])?.includes(requireRole));
	}, [roles, userRoles]);

	if (!userInfo) {
		return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
	}

	if (!hasRequiredRoles) {
		return <Navigate to={getRouteNotFound()} state={{ from: location }} replace />;
	}

	return children;
};
