import request from "../request";
import type { AxiosPromise } from "axios";

import type { Result } from "../type";
import type { AddGoodForm, GoodInfor, GoodPage, GoodQuery } from "./type";

export function pageGoods(
	data: GoodPage
): AxiosPromise<Result<GoodQuery<GoodInfor[]>>> {
	return request({
		url: "/goods",
		method: "get",
		params: data,
	});
}

export function queryGood(id: number): AxiosPromise<Result<GoodInfor>> {
	return request({
		url: `/goods/${id}`,
		method: "get",
	});
}

export function offShelves(id: number): AxiosPromise<Result> {
	return request({
		url: `/goods/${id}`,
		method: "put",
	});
}

export function addGood(data: AddGoodForm): AxiosPromise<Result> {
	return request({
		url: "/goods",
		method: "post",
		data: data,
	});
}

export function delGood(id: number): AxiosPromise<Result> {
	return request({
		url: `/goods/${id}`,
		method: "delete",
	});
}
