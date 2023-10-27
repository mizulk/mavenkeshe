<script setup lang="ts">
import { modifyCart, removeCart } from "@/api/cart";
import { userStore as userUserStore } from "@/stores/user";
import { Delete, Check } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { ref } from "vue";

const userStore = userUserStore();
const props = withDefaults(
	defineProps<{
		goodId: number;
		amount: number;
	}>(),
	{ price: 0, type: "未知", goodId: 0 }
);

const count = ref<number>(1);

function onDelBtnClick() {
	removeCart(props.goodId)
		.then(({ data }) => {
			if (data.code == 1) {
				ElMessage({
					message: "删除成功",
					type: "success",
				});
			} else {
				ElMessage({
					message: "删除失败" + data.msg,
					type: "error",
				});
			}
		})
		.catch((e) =>
			ElMessage({
				message: "移除购物车物品发生错误：" + e,
				type: "error",
			})
		);
}

function onModifyBtnClick() {
	modifyCart({
		userId: userStore.userId,
		goodId: props.goodId,
		count: count.value,
	}).catch((e) => {
		ElMessage({
			message: "修改失败" + e,
			type: "error",
		});
	});
}
</script>

<template>
	<div>
		<div class="title">商品id： {{ goodId }}</div>
		<div>
			<div class="input-box">
				<el-input-number v-model="count" :min="1" />
				<el-button
					type="danger"
					:icon="Delete"
					circle
					@click="onDelBtnClick()" />
				<el-button
					type="success"
					:icon="Check"
					circle
					@click="onModifyBtnClick()" />
			</div>
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

.input-box {
	margin: 1rem 10rem;
	display: flex;

	> .el-input-number {
		flex-grow: 1;
	}
}
</style>
