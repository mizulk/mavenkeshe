import type { PageQuery, PageResult } from "../type";

export interface UserInfor extends UserRegisterForm {
	id: number;
	savings: number;
	createTime: string;
	updateTime: string;
}

export interface UserPage extends PageQuery {
	userName?: string;
	name?: string;
	gender?: number;
	savings?: number;
	time?: [Date, Date] | [null, null];
}

export interface UserLoginForm {
	userName: string;
	password: string;
}

export interface UserRegisterForm extends UserLoginForm {
	gender: number;
	password2?: string;
	phoneNumber?: string;
}

export type UserQuery<UserInfor> = PageResult<UserInfor>;
