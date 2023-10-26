import request from "../request";
import type { OrderInfor, OrderPage } from "./type";

export function pageOrder(queryParam: OrderPage) {
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
