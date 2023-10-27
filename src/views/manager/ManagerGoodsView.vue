<script setup lang="ts">
import { addGood, offShelves, pageGoods } from "@/api/goods";
import type {
	AddGoodForm,
	GoodInfor,
	GoodPage,
	GoodQuery,
} from "@/api/goods/type";
import type { Result } from "@/api/type";
import type { AxiosResponse } from "axios";
import { ElMessage, ElMessageBox, type FormInstance } from "element-plus";
import { onMounted, reactive, ref } from "vue";
import { Delete } from "@element-plus/icons-vue";

const total = ref(0);
const tableData = ref<GoodInfor[]>([
	{
		id: 1,
		goodName: "",
		kindName: "",
		stock: 1,
		price: 1,
	},
]);

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

const addGoodFormRef = ref<FormInstance>();
const dialogFormVisible = ref(false);
const addGoodForm = reactive<AddGoodForm>({
	goodName: "",
	kindName: "",
	stock: 0,
	price: 0,
});

async function onConfirmClick(form: FormInstance | undefined) {
	if (form == null) return;
	await form.validate((valid: boolean) => {
		if (valid) {
			addGood(addGoodForm)
				.then(({ data }) => {
					ElMessage({
						message: data.code == 1 ? "添加成功" : "添加失败",
						type: data.code == 1 ? "success" : "error",
					});
				})
				.catch((e) =>
					ElMessage({
						message: "删除失败" + e,
						type: "error",
					})
				);
			dialogFormVisible.value = false;
			form.resetFields();
		} else {
			ElMessage({
				message: "请完善表单",
				type: "warning",
			});
		}
	});
}

function onDelBtnClick(id: number) {
	ElMessageBox.confirm("你确定要下架这个")
		.then(() => {
			offShelves(id)
				.then(({ data }) => {
					ElMessage({
						message: data.code == 1 ? "下架成功" : "下架失败",
						type: data.code == 1 ? "success" : "error",
					});
					tableData.value.filter((item: GoodInfor) => item.id != id);
				})
				.catch((e) =>
					ElMessage({
						message: "删除失败" + e,
						type: "error",
					})
				);
		})
		.catch(() => ElMessage("已取消"));
}

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
				<el-form-item>
					<el-button type="primary" @click="dialogFormVisible = true"
						>添加</el-button
					>
				</el-form-item>
			</el-form>
		</el-header>
		<el-main>
			<el-table :data="tableData">
				<el-table-column prop="id" label="商品序列号" />
				<el-table-column prop="goodName" label="商品名" />
				<el-table-column prop="kindName" label="类型名" />
				<el-table-column prop="stock" label="库存">
					<template #default="scope">
						<el-tag
							:type="
								scope.row.stock > 100 ? 'success' : 'danger'
							">
							{{ scope.row.stock }}</el-tag
						>
					</template>
				</el-table-column>
				<el-table-column prop="price" label="价格(元)" />
				<el-table-column label="操作">
					<template #default="scope">
						<el-button
							type="danger"
							:icon="Delete"
							circle
							@click="onDelBtnClick(scope.row.id)" />
					</template>
				</el-table-column>
			</el-table>
		</el-main>
		<el-footer>
			<el-pagination
				background
				layout="prev, pager, next"
				:total="total" />
		</el-footer>
	</el-container>

	<el-dialog v-model="dialogFormVisible" title="Shipping address">
		<el-form :model="addGoodForm" ref="addGoodFormRef">
			<el-form-item label="商品名" required>
				<el-input v-model="addGoodForm.goodName" autocomplete="off" />
			</el-form-item>
			<el-form-item label="类型名" required>
				<el-input v-model="addGoodForm.kindName" />
			</el-form-item>
			<el-form-item label="价格">
				<el-input-number v-model="addGoodForm.price" min="1" />
			</el-form-item>
			<el-form-item label="库存">
				<el-input-number v-model="addGoodForm.stock" min="0" />
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取消</el-button>
				<el-button
					type="primary"
					@click="onConfirmClick(addGoodFormRef)">
					确定
				</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<style scoped lang="less">
.manage-goods {
	flex-grow: 1;
}
</style>
