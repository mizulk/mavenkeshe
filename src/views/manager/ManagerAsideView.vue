<script setup lang="ts">
</script>

<template>
	<el-aside width="200px" class="aside">
		<el-menu class="menu">
			<el-menu-item>
				管理用户
			</el-menu-item>
			<el-menu-item>
				管理商品
			</el-menu-item>
			<el-menu-item>
				管理订单
			</el-menu-item>
			<el-menu-item>
				查看购物车
			</el-menu-item>
		</el-menu>
	</el-aside>
</template>

<style scoped lang="less">
.aside{
	display: flex;
	flex-direction: column;
}
.menu{
	flex-grow: 1;
	background-color: #dbdbdb;
}
</style>