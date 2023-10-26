<script setup lang="ts"></script>

<template>
	<el-container class="manage-goods">
		<el-header height="10rem">
			<h2>搜索商品：</h2>
			<el-form :inline="true">
				<el-form-item label="商品名称：">
					<el-input placeholder="请输入你要查找的商品名称" />
				</el-form-item>
				<el-form-item label="商品类型">
					<el-input placeholder="请输入你要查找的商品类型" />
				</el-form-item>
				<el-form-item label="创建时间">
					<el-date-picker
						type="daterange"
						range-separator="To"
						start-placeholder="开始时间"
						end-placeholder="结束时间" />
				</el-form-item>
				<br />
				<el-form-item label="单价：">
					<el-input>
						<template #prepend>
							<el-select style="width: 10rem">
								<el-option label="大于" value="1" />
								<el-option label="小于" value="2" />
							</el-select>
						</template>
						<template #append>元</template>
					</el-input>
				</el-form-item>
				<el-form-item label="库存">
					<el-input>
						<template #prepend>
							<el-select style="width: 10rem">
								<el-option label="大于" value="1" />
								<el-option label="小于" value="2" />
							</el-select>
						</template>
						<template #append>元</template>
					</el-input>
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
			<el-table> </el-table>
		</el-main>
		<el-footer>
			<el-pagination
				background
				layout="prev, pager, next"
				:total="1000" />
		</el-footer>
	</el-container>
</template>

<style scoped lang="less">
.manage-goods {
	flex-grow: 1;
}
</style>
