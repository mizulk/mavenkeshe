<script setup lang="ts">
import InconLogo from '@/components/icons/InconLogo.vue';
import { reactive } from 'vue'

const managerLoginForm = reactive({
	userName: '',
	password: ''
});
</script>

<template>
	<div class="manager-login">
		<el-container>
			<el-header class="manager-login-header">
				<InconLogo />
			</el-header>
			<el-main class="manager-login-main">
				<div class="login-panel">
					<el-form :model="managerLoginForm" label-width="10rem">
						<h1 class="title">管理员登录</h1>
						<el-form-item>
							<template #label>
								<span class="form-label">账号：</span>
							</template>
							<el-input v-model="managerLoginForm.userName" />
						</el-form-item>
						<el-form-item>
							<template #label>
								<span class="form-label">密码：</span>
							</template>
							<el-input v-model="managerLoginForm.password" type="password" clearable />
						</el-form-item>
						<el-form-item>
							<el-button class="btn-warpper">登录</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-main>
			<el-footer></el-footer>
		</el-container>
	</div>
</template>

<style scoped lang="less">
.manager-login {
	display: flex;
	height: 100vh;
}

.manager-login-header {
	height: 88px;
}

.manager-login-main {
	display: flex;
	flex-direction: row-reverse;
	background: #4fceca;
	align-items: center;

	.login-panel {
		min-width: 36rem;
		padding: 5rem 1.8rem;
		margin-right: 20rem;
		background-color: var(--logo-text-color);

		.title {
			margin-bottom: 6rem;
			color: white;
			text-align: center;
			font-size: 4rem;
		}

		.btn-warpper {
			margin-top: 2rem;
			width: 15rem;
		}
	}
}

.form-label {
	color: white;
	font-size: large;
}
</style>