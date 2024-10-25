import { create } from "zustand";
import { UserInfo } from "../types/UserInfo";

interface UserState {
	userInfo: UserInfo | null;
}

interface UserActions {
	setUserInfo: (userInfo: UserInfo) => void;
}

type UserSchema = UserActions & UserState;

export const useUserStore = create<UserSchema>((set) => ({
	userInfo: null,
	setUserInfo: (userInfo) => set(() => ({ userInfo })),
}));
