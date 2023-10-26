<script setup lang="ts"></script>

<template>
	<el-container class="manager-user">
		<el-header class="header">
			<h2>搜索用户：</h2>
			<el-form :inline="true">
				<el-form-item label="用户名：">
					<el-input placeholder="请输入需要搜索的用户名" />
				</el-form-item>
				<el-form-item label="姓名：">
					<el-input placeholder="“请输入需要搜索的用户姓名" />
				</el-form-item>
				<el-form-item label="性别：">
					<el-select placeholder="请选择性别" clearable>
						<el-option label="男" value="0" />
						<el-option label="女" value="1" />
					</el-select>
				</el-form-item>
				<el-form-item label="存款：">
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
				<br />
				<el-form-item label="注册时间：">
					<el-date-picker
						type="daterange"
						range-separator="To"
						start-placeholder="开始时间"
						end-placeholder="结束时间" />
				</el-form-item>
				<el-form-item label="注册时间：">
					<el-date-picker
						type="daterange"
						range-separator="To"
						start-placeholder="开始时间"
						end-placeholder="结束时间" />
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
			<el-table></el-table>
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
.header {
	height: 12rem;
}

.manager-user {
	flex-grow: 1;
}
</style>
