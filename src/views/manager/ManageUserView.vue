<script setup lang="ts">
import type { UserPage, UserInfor, UserQuery } from "@/api/user/type";
import { pageUser } from "@/api/user/index";
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import type { AxiosResponse } from "axios";
import type { Result } from "@/api/type";

const total = ref<number>(0);
const tableData = ref<UserInfor[]>();
const isSearching = ref(false);

const userSearchForm = reactive<UserPage>({
	page: 1,
	pageSize: 10,
	time: [null, null],
});

function onSearchBtnClick() {
	pageUser(userSearchForm).then(handleRespone).catch(handleError);
}

async function onCloseBtnClick() {
	userSearchForm.userName = undefined;
	userSearchForm.saving = undefined;
	userSearchForm.pageSize = 10;
	userSearchForm.page = 1;
	userSearchForm.gender = undefined;
	await pageUser(userSearchForm).then(handleRespone).catch(handleError);
	isSearching.value = false;
}

function handleRespone(result: AxiosResponse<Result<UserQuery<UserInfor[]>>>) {
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
	pageUser(userSearchForm).then(handleRespone).catch(handleError);
});
</script>

<template>
	<el-container class="manager-user">
		<el-header class="header">
			<h2>搜索用户：</h2>
			<el-form :inline="true" :model="userSearchForm">
				<el-form-item label="用户名：">
					<el-input
						placeholder="请输入需要搜索的用户名"
						v-model="userSearchForm.userName" />
				</el-form-item>
				<el-form-item label="姓名：">
					<el-input
						placeholder="“请输入需要搜索的用户姓名"
						v-model="userSearchForm.name" />
				</el-form-item>
				<el-form-item label="性别：">
					<el-select
						placeholder="请选择性别"
						clearable
						v-model="userSearchForm.gender">
						<el-option label="男" value="0" />
						<el-option label="女" value="1" />
					</el-select>
				</el-form-item>
				<el-form-item label="存款：">
					<el-input
						placeholder="请输入需要查询的存款"
						v-model="userSearchForm.saving">
						<template #append>元</template>
					</el-input>
				</el-form-item>
				<br />
				<el-form-item label="注册时间：">
					<el-date-picker
						type="daterange"
						range-separator="To"
						start-placeholder="开始时间"
						end-placeholder="结束时间"
						v-model="userSearchForm.time" />
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
			<el-table :data="tableData"></el-table>
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

.manager-user {
	flex-grow: 1;
}
</style>
