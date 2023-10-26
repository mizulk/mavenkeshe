import type { PageQuery } from "../type";

export interface UserInfor extends UserRegisterForm {
	id: number;
	saving: number;
	createTime: string;
	updateTime: string;
}

export interface UserPage extends PageQuery {
	userName: string;
	name: string;
	gender: number;
	saving: number;
	beginTime: string;
	endTime: string;
}

export interface UserLoginForm {
	userName: string;
	password: string;
}

export interface UserRegisterForm extends UserLoginForm {
	gender: number;
	phoneNumber?: string;
}

export interface UserQuery {
	total: number;
	data: UserInfor[];
}
