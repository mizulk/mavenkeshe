<script setup lang="ts">
import InconLogo from '@/components/icons/InconLogo.vue';
import { reactive, ref } from 'vue'

const registerFrom = reactive({
	userName: '',
	password: '',
	password2: '',
});
const isChecked = ref(false);
</script>

<template>
	<div id="register-view">
		<el-container>
			<el-header class="register-hader">
				<div class="logo">
					<InconLogo height="50"></InconLogo><span>欢迎注册</span>
				</div>
				<div class="login">
					<span>已有账号？</span>
					<RouterLink to="">请登录></RouterLink>
				</div>
			</el-header>
			<!-- <hr> -->
			<el-main class="register-main">
				<el-form :model="registerFrom" label-width="100px">
					<el-form-item label="账号名：">
						<el-input v-model="registerFrom.userName" />
					</el-form-item>
					<el-form-item label="密码：">
						<el-input v-model="registerFrom.password" type="password" />
					</el-form-item>
					<el-form-item label="确认密码：">
						<el-input v-model="registerFrom.password2" type="password" />
					</el-form-item>
					<el-form-item>
						<el-checkbox v-model="isChecked">
							已阅读并同意以下协议<RouterLink to="">小蓝书平台服务协议</RouterLink>
						</el-checkbox>
					</el-form-item>
					<el-form-item>
						<el-button class="register-btn" color="#5c341b">
							<span style="color: white;">注册</span>
						</el-button>
					</el-form-item>
				</el-form>
			</el-main>
		</el-container>
	</div>
</template>

<style lang="less" scoped>
.register-hader {
	height: 90px;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	border-bottom: #e3e3e2 solid .7rem;

	.logo>span {
		display: inline-block;
		font-size: 4rem;
		margin-left: 1rem;
		color: #5c341b;
	}

	.login {
		font-size: 2.8rem;

		>span {
			color: #edddb2;
		}
	}
}

.register-main {
	display: flex;
	justify-content: center;
	align-items: center;

	.el-form {
		width: 40%;
	}

	.register-btn {
		width: 50rem;
		color: #5c341b;
	}
}

#register-view {
	height: 100vh;
	display: flex;
}
</style>