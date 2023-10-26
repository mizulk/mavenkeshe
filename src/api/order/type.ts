export interface OrderInfor extends AddOrderForm {
	id: number;
}

export interface OrderPage {
	page: number;
	pageSize: number;
	id?: number;
	userId?: number;
	goodId?: number;
	amount?: number;
	totalPrice?: number;
	goodPrice?: number;
}

export interface AddOrderForm {
	userId: number;
	goodId: number;
	amount: number;
	totalPrice: number;
	goodPrice: number;
}
