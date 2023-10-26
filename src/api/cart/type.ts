export interface CartItem {
	userId: number;
	goodId: number;
	count: number;
}

export interface PageCart {
	page?: number;
	pageSize: number;
	userId?: number;
	goodId?: number;
	count?: number;
}
