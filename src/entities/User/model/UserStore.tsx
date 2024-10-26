import { create } from "zustand";
import { UserInfo } from "../types/UserInfo";
import { _E_Customer, _E_Doctor } from "@/shared/__generate/graphql-frontend";

interface UserState {
	userInfo: UserInfo | null;
	user: _E_Doctor | _E_Customer | null;
}

interface UserActions {
	setUserInfo: (userInfo: UserInfo) => void;
	setUser: (user: _E_Doctor | _E_Customer) => void;
}

type UserSchema = UserActions & UserState;

export const useUserStore = create<UserSchema>((set) => ({
	userInfo: null,
	user: null,
	setUserInfo: (userInfo) => set(() => ({ userInfo })),
	setUser: (user) => set(() => ({ user })),
}));
