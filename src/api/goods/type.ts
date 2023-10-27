import type { PageQuery, PageResult } from "../type";

export interface GoodInfor extends AddGoodForm {
	id: number;
}

export interface GoodPage extends PageQuery {
	id?: number;
	goodName?: string;
	kindType?: string;
	stock?: number;
	price?: number;
}

export interface AddGoodForm {
	goodName: string;
	kindType: string;
	stock: number;
	price: number;
}

export type GoodQuery<GoodInfor> = PageResult<GoodInfor>;
