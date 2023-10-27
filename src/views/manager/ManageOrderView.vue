<script setup lang="ts">
import { pageOrder } from "@/api/order";
import type { OrderInfor, OrderPage, OrderQuery } from "@/api/order/type";
import type { Result } from "@/api/type";
import type { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";

const total = ref(0);
const tableData = ref<OrderInfor[]>([
	{
		id: 1,
		userId: 1,
		goodId: 1,
		amount: 1,
		totalPrice: 1,
		goodPrice: 1,
	},
]);

const isSearching = ref(false);

const orderSearchForm = reactive<OrderPage>({
	page: 1,
	pageSize: 10,
	id: undefined,
	userId: undefined,
	goodId: undefined,
	amount: undefined,
	totalPrice: undefined,
	goodPrice: undefined,
});

function onSearchBtnClick() {
	pageOrder(orderSearchForm).then(handleRespone).catch(handleError);
}

async function onCloseBtnClick() {
	orderSearchForm.page = 1;
	orderSearchForm.pageSize = 10;
	orderSearchForm.id = undefined;
	orderSearchForm.amount = undefined;
	orderSearchForm.goodId = undefined;
	orderSearchForm.goodPrice = undefined;
	orderSearchForm.totalPrice = undefined;
	await pageOrder(orderSearchForm).then(handleRespone).catch(handleError);
	isSearching.value = false;
}

function handleRespone(
	result: AxiosResponse<Result<OrderQuery<OrderInfor[]>>>
) {
	if (result.data.code == 1) {
		if (result.data.data.total == 0) {
			ElMessage({
				message: "无数据",
				type: "warning",
			});
		}
		total.value = result.data.data.total;
		tableData.value = result.data.data.data;
		isSearching.value = true;
	} else {
		ElMessage({
			message: "请求失败",
			type: "error",
		});
	}
}

function handleError(e: PromiseLike<void>) {
	console.log("查询订单时出现错误", e);
}

onMounted(() => {
	pageOrder(orderSearchForm).then(handleRespone).catch(handleError);
});
</script>

<template>
	<el-container class="manager-order">
		<el-header class="header">
			<h2>搜索订单</h2>
			<el-form :inline="true">
				<el-form-item label="用户id">
					<el-input
						placeholder="请输入你需要查询的用户id"
						v-model="orderSearchForm.userId" />
				</el-form-item>
				<el-form-item label="商品id">
					<el-input
						placeholder="请输入你需要查询的商品id"
						v-model="orderSearchForm.goodId" />
				</el-form-item>
				<br />
				<el-form-item label="购买数量">
					<el-input
						placeholder="请输入你需要查询的购买数量"
						v-model="orderSearchForm.amount">
						<template #append>个</template>
					</el-input>
				</el-form-item>
				<el-form-item label="购买价格">
					<el-input
						placeholder="请输入你需要查询的购买价格"
						v-model="orderSearchForm.goodPrice">
						<template #append>元</template>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSearchBtnClick()"
						>搜索</el-button
					>
				</el-form-item>
				<el-form-item>
					<el-button
						type="infor"
						:disabled="!isSearching"
						@click="onCloseBtnClick()"
						>关闭</el-button
					>
				</el-form-item>
			</el-form>
		</el-header>
		<el-main>
			<el-table :data="tableData">
				<el-table-column prop="id" label="订单号" />
				<el-table-column prop="userId" label="用户id" />
				<el-table-column prop="goodId" label="商品id" />
				<el-table-column prop="amount" label="购买数量" />
				<el-table-column prop="totalPrice" label="金额" />
				<el-table-column prop="goodPrice" label="商品价格" />
			</el-table>
		</el-main>
		<el-footer>
			<el-pagination
				background
				layout="prev, pager, next"
				:total="total" />
		</el-footer>
	</el-container>
</template>

<style scoped lang="less">
.header {
	height: 12rem;
}

.manager-order {
	flex-grow: 1;
}
</style>
