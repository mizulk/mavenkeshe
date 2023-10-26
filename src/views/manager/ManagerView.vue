<script setup lang="ts">
import ManagerAsideView from "./ManagerAsideView.vue";
import InconLogo from "@/components/icons/InconLogo.vue";
</script>

<template>
	<div class="manager">
		<el-container>
			<el-header class="header">
				<div>
					<InconLogo height="70" />
					<span>管理员系统</span>
				</div>
			</el-header>
			<hr />
			<el-container>
				<ManagerAsideView />
				<el-main class="main">
					<RouterView />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<style scoped lang="less">
.header {
	height: 9rem;

	span {
		margin-left: 4rem;
		font-size: 3rem;
		color: var(--logo-text-color);
	}
}

.main {
	display: flex;
}

.manager {
	display: flex;
	height: 100vh;
}
</style>
