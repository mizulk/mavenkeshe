<script setup lang="ts">
import { pageGoods } from "@/api/goods";
import type { GoodInfor, GoodPage, GoodQuery } from "@/api/goods/type";
import type { Result } from "@/api/type";
import type { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
import { onMounted, reactive, ref } from "vue";

const total = ref(0);
const tableData = ref<GoodInfor[]>();

const isSearching = ref(false);

const goodSearchForm = reactive<GoodPage>({
	page: 1,
	pageSize: 10,
	id: undefined,
	goodName: undefined,
	kindName: undefined,
	price: undefined,
	stock: undefined,
});

function onSearchBtnClick() {
	pageGoods(goodSearchForm).then(handleRespone).catch(handleError);
}
function onCloseBtnClick() {
	goodSearchForm.page = 1;
	goodSearchForm.pageSize = 10;
	goodSearchForm.id = undefined;
	goodSearchForm.goodName = undefined;
	goodSearchForm.kindName = undefined;
	goodSearchForm.price = undefined;
	goodSearchForm.stock = undefined;
	pageGoods(goodSearchForm).then(handleRespone).catch(handleError);
}
function handleRespone(result: AxiosResponse<Result<GoodQuery<GoodInfor[]>>>) {
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
	console.log(e);
}

onMounted(() => {
	pageGoods(goodSearchForm).then(handleRespone).catch(handleError);
});
</script>

<template>
	<el-container class="manage-goods">
		<el-header height="10rem">
			<h2>搜索商品：</h2>
			<el-form :inline="true" :model="goodSearchForm">
				<el-form-item label="商品名称：">
					<el-input
						placeholder="请输入你要查找的商品名称"
						v-model="goodSearchForm.id" />
				</el-form-item>
				<el-form-item label="商品类型">
					<el-input
						placeholder="请输入你要查找的商品类型"
						v-model="goodSearchForm.kindName" />
				</el-form-item>
				<br />
				<el-form-item label="单价：">
					<el-input
						placeholder="请输入你要查找的商品价格"
						v-model="goodSearchForm.price">
						<template #append>元</template>
					</el-input>
				</el-form-item>
				<el-form-item label="库存">
					<el-input
						placeholder="请输入你要查询的库存"
						v-model="goodSearchForm.stock">
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
			<el-table :data="tableData"> </el-table>
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
.manage-goods {
	flex-grow: 1;
}
</style>
