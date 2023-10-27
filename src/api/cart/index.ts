import type { AxiosPromise } from "axios";
import request from "../request";
import type { CartItem, PageCart } from "./type";

export function addCart(data: CartItem) {
	return request({
		url: "/cart",
		method: "post",
		data: data,
	});
}

export function removeCart(ids: number) {
	return request({
		url: `/cart/${ids}`,
		method: "delete",
	});
}

export function modifyCart(amount: number) {
	return request({
		url: "/cart",
		method: "put",
		data: amount,
	});
}

export function queryCart(data: PageCart): AxiosPromise<CartItem> {
	return request({
		url: "/cart",
		method: "get",
		params: data,
	});
}
