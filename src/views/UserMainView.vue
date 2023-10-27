<script setup lang="ts">
import UserHader from "@/components/UserHader.vue";
import UserMainInfor from "@/components/UserMainInfor.vue";
import UserMainLeft from "@/components/UserMainLeft.vue";
import UserMainRight from "@/components/UserMainRight.vue";
import GoodInformation from "@/components/GoodInformation.vue";
import { reactive, ref } from "vue";
import { CircleCloseFilled } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { pageGoods } from "@/api/goods";
import type { PageGoods } from "@/api/kind/type";
import type { GoodInfor } from "@/api/goods/type";

const visible = ref(true);
const isLoading = ref(false);
const searchGood = reactive<PageGoods>({
	page: 1,
	pageSize: 10,
	goodName: "",
});

const goodsData = ref<GoodInfor[]>();

function search() {
	isLoading.value = true;
	pageGoods(searchGood)
		.then(({ data }) => {
			if (data.code == 1) {
				goodsData.value = data.data.rows;
				visible.value = true;
			} else {
				ElMessage({
					message: "查询失败",
					type: "error",
				});
			}
			isLoading.value = false;
		})
		.catch((e) => {
			isLoading.value = false;
			ElMessage({
				message: "查询商品出现错误：" + e,
				type: "error",
			});
		});
}

function getTick() {
	ElMessage({
		message: "领卷成功，快去使用吧！",
		type: "success",
	});
}
</script>

<template>
	<div id="user-main">
		<UserHader @click="search()" :is-loading="isLoading">
			<el-input size="large" v-model="searchGood.goodName" clearable />
			<el-button
				color="#5c341b"
				size="large"
				@click="search()"
				:loading="isLoading">
				<span style="color: white">搜索</span>
			</el-button>
		</UserHader>
		<div class="infor">
			<div class="describe">美好生活 就在小蓝书！</div>
			<UserMainInfor
				text="点击此处领卷 双十一满100"
				@on-click="getTick()" />
		</div>
		<div class="main-warpper">
			<UserMainLeft class="left" />
			<UserMainRight class="right" />
		</div>
	</div>

	<el-drawer v-model="visible" :show-close="false" direction="btt" size="80%">
		<template #header="{ close, titleId, titleClass }">
			<h4 :id="titleId" :class="titleClass">商品列表</h4>
			<el-button type="danger" @click="close">
				<el-icon class="el-icon--left">
					<CircleCloseFilled />
				</el-icon>
				关闭
			</el-button>
		</template>
		<div style="display: flex; height: 100%; flex-wrap: wrap">
			<GoodInformation
				v-for="(item, index) in goodsData"
				:key="index"
				:title="item.goodName"
				:good-id="item.id"
				:price="item.price"
				:type="item.kindType" />
		</div>
	</el-drawer>
</template>

<style lang="less" scoped>
.infor {
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	color: #969696;

	> .describe {
		margin-left: 10rem;
		font-size: 2rem;
	}
}

.main-warpper {
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	margin: 0 8rem;

	> .left {
		flex-grow: 1;
	}

	> .right {
		padding: 0 5rem;
	}
}

#user-main {
	height: 100vh;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
}
</style>
