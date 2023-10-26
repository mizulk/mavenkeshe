import request from "../request";
import type { GoodsType, PageGoods } from "./type";

export function addKind(typeName: string) {
	return request({
		url: "/kind",
		method: "post",
		data: typeName,
	});
}

export function modifyKind(data: GoodsType) {
	return request({
		url: "/kind",
		method: "put",
		data: data,
	});
}

export function queryKind(id: number) {
	return request({
		url: `/kind/${id}`,
		method: "get",
	});
}

export function pageKind(data: PageGoods) {
	return request({
		url: "/kind",
		method: "get",
		data: data,
	});
}
