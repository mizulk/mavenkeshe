<script setup lang="ts"></script>

<template>
	<el-container class="manager-order">
		<el-header>
			<h2>搜索订单</h2>
			<el-form :inline="true">
				<el-form-item label="用户名">
					<el-input />
				</el-form-item>
				<el-form-item label="商品id">
					<el-input />
				</el-form-item>
				<el-form-item label="购买时间">
					<el-date-picker type="daterange" range-separator="To" start-placeholder="开始时间" end-placeholder="结束时间" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary">搜索</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" disabled>关闭</el-button>
				</el-form-item>
			</el-form>
		</el-header>
		<el-main>
			<el-table>
				
			</el-table>
		</el-main>
		<el-footer>
			<el-pagination background layout="prev, pager, next" :total="1000" />
		</el-footer>
	</el-container>
</template>

<style scoped lang="less">
.manager-order {
	flex-grow: 1;
}
</style>