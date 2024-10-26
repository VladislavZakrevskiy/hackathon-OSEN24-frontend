import { UserRoles, useUserStore } from "@/entities/User";
import { getRole } from "@/shared/lib/utils/getRole";

export const MainPageRoleSection = () => {
	const { userInfo } = useUserStore();

	switch (getRole(userInfo?.roles || [])) {
		case UserRoles.ADMIN:
			return;
	}
};
