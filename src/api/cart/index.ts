import type { AxiosPromise } from "axios";
import request from "../request";
import type { CartItem, PageCart } from "./type";
import type { PageResult, Result } from "../type";

export function addCart(data: CartItem) {
	return request({
		url: "/cart",
		method: "post",
		data: data,
	});
}

export function removeCart(ids: number): AxiosPromise<Result> {
	return request({
		url: `/cart/${ids}`,
		method: "delete",
	});
}

export function modifyCart(amount: CartItem) {
	return request({
		url: "/cart",
		method: "put",
		data: amount,
	});
}

export function queryCart(
	data: PageCart
): AxiosPromise<Result<PageResult<CartItem[]>>> {
	return request({
		url: "/cart",
		method: "get",
		params: data,
	});
}
