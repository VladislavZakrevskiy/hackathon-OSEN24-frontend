export interface AppUserInfo {
	id: string;
	name: string;
}

export interface UserInfo {
	sub: string;
	name: string;
	preferred_username: string;
	given_name: string;
	family_name: string;
	email: string;
	app?: AppUserInfo;
	roles: Array<string>;
}
