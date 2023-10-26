import type { AxiosPromise } from "axios";
import request from "../request";
import type { OrderInfor, OrderPage, OrderQuery } from "./type";
import type { Result } from "../type";

export function pageOrder(
	queryParam: OrderPage
): AxiosPromise<Result<OrderQuery<OrderInfor[]>>> {
	return request({
		url: "/orders",
		method: "get",
		params: queryParam,
	});
}

export function addOrder(order: OrderInfor) {
	return request({
		url: "/orders",
		method: "post",
		data: order,
	});
}

export function queryOrder(id: number) {
	return request({
		url: `/orders/${id}`,
		method: "get",
	});
}

export function offShelf(id: number) {
	return request({
		url: `/orders/${id}`,
		method: "put",
	});
}
