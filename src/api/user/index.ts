import request from "../request";
import type {
	UserInfor,
	UserLoginForm,
	UserPage,
	UserQuery,
	UserRegisterForm,
} from "./type";
import type { Result } from "../type";
import type { AxiosPromise } from "axios";

export function pageUser(
	queryParam: UserPage
): AxiosPromise<Result<UserQuery<UserInfor[]>>> {
	return request({
		url: "/users",
		method: "get",
		params: queryParam,
	});
}

export function delUser(id: number): AxiosPromise<Result> {
	return request({
		url: `/users/${id}`,
		method: "delete",
	});
}

export function modifyUser(data: UserInfor): AxiosPromise<Result> {
	return request({
		url: "/users",
		method: "put",
		data: data,
	});
}

export function queryUser(id: number): AxiosPromise<Result<UserInfor>> {
	return request({
		url: `/users/${id}`,
		method: "get",
	});
}

export function login(data: UserLoginForm): AxiosPromise<Result<string>> {
	return request({
		url: "/login",
		method: "post",
		data,
	});
}

export function register(data: UserRegisterForm): AxiosPromise<Result> {
	return request({
		url: "/register",
		method: "post",
		data,
	});
}
