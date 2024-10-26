import { UserRoles, useUserStore } from "@/entities/User";

export const MainPageRoleSection = () => {
	const { userInfo } = useUserStore();

	switch (userInfo?.role) {
		case UserRoles.ADMIN:
			return;
	}
};
