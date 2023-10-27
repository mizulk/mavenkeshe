<script setup lang="ts">
import { addCart } from "@/api/cart";
import { addOrder } from "@/api/order";
import { ElMessage, ElMessageBox } from "element-plus";

import { userStore as useUserStore } from "@/stores/user";

const userStore = useUserStore();

const props = withDefaults(
	defineProps<{
		title: string;
		type: string;
		price: number;
		goodId: number;
	}>(),
	{ price: 0, type: "未知" }
);

async function buy() {
	await ElMessageBox.prompt("请输入需要的数量：", "购买商品", {
		confirmButtonText: "购买",
		cancelButtonText: "取消",
		inputPattern: /[1-9]+/,
		inputErrorMessage: "请输入正确的购买数量",
	})
		.then(({ value }) => {
			let num = parseInt(value);
			addOrder({
				id: 0,
				userId: 0,
				goodId: props.goodId,
				amount: num,
				totalPrice: num * props.price,
				goodPrice: props.price,
			})
				.then(({ data }) => {
					ElMessage({
						message:
							data.code == 1
								? "购买成功"
								: "购买失败 " + data.msg,
						type: data.code == 1 ? "success" : "error",
					});
				})
				.catch((e) =>
					ElMessage({
						message: "购买出现问题：" + e,
						type: "error",
					})
				);
		})
		.catch(() => ElMessage("已取消"));
}

function addGoodToCart() {
	ElMessageBox.prompt("请输入需要的数量：", "加入购物车", {
		confirmButtonText: "添加",
		cancelButtonText: "取消",
		inputPattern: /[1-9]+/,
		inputErrorMessage: "请输入正确的购买数量",
	})
		.then(({ value }) => {
			let num = parseInt(value);
			addCart({
				userId: userStore.userId,
				goodId: props.goodId,
				count: num,
			})
				.then(({ data }) => {
					ElMessage({
						message:
							data.code == 1
								? "添加成功"
								: "添加失败 " + data.msg,
						type: data.code == 1 ? "success" : "error",
					});
				})
				.catch((e) =>
					ElMessage({
						message: "添加出现问题：" + e,
						type: "error",
					})
				);
		})
		.catch(() => ElMessage("已取消"));
}
</script>

<template>
	<div class="good">
		<div class="title">{{ title }}</div>
		<div class="type">{{ type }}</div>
		<div class="price">{{ price }} 元</div>
		<div class="btn">
			<el-button type="primary" @click="buy">购买</el-button>
			<el-button @click="addGoodToCart()">加入购物车</el-button>
		</div>
	</div>
</template>

<style scoped lang="less">
.good {
	margin: 1rem;
}

.title {
	text-align: center;
	font-size: 4rem;
	margin-bottom: 1rem;
}

.type {
	text-align: center;
	margin-bottom: 1rem;
}

.price {
	text-align: center;
	margin-bottom: 1rem;
	font-size: 2rem;
}
</style>
