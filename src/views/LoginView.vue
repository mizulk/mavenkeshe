<script setup lang="ts">
import IconLogo from '../components/icons/InconLogo.vue'
import { reactive } from 'vue'
const loginForm = reactive({
	userName: '',
	password: ''
});
</script>

<template>
	<div id="login-view">
		<el-container>
			<el-header class="login-header">
				<span class="logo">LANSHU</span>
				<IconLogo height="60"></IconLogo>
			</el-header>
			<el-main class="login-main">
				<div class="left"></div>
				<div class="right">
					<el-form :model="loginForm" label-width="80px">
						<h1 class="title">LANSHU小<span style="color: #9dd1e6;">蓝</span>书</h1>
						<el-form-item>
							<template #label>
								<span class="form-label">账号：</span>
							</template>
							<el-input v-model="loginForm.userName" />
						</el-form-item>

						<el-form-item>
							<template #label>
								<span class="form-label">密码：</span>
							</template>
							<el-input v-model="loginForm.password" type="password" />
						</el-form-item>
						<el-form-item class="btn-warrper">
							<el-button>登录</el-button>
						</el-form-item>
						<div class="a-warrper">
							<RouterLink to="">还没有账号？快来注册一个吧！</RouterLink>
						</div>
					</el-form>
				</div>
			</el-main>
			<el-footer></el-footer>
		</el-container>
	</div>
</template>

<style lang="less" scoped>
.login-header {
	height: 88px;

	>.logo {
		margin-left: 4rem;
		font-size: 7rem;
		font-weight: 500;
		color: #5c341b;
	}
}

.login-main {
	padding: 0;
	flex-grow: 1;
	// background: #41a8a5;
	background: #4fceca;
	display: flex;

	.left {
		width: 60%;
		background: url('../assets/login_image.png') no-repeat center;

	}

	.right {
		display: flex;
		justify-items: center;
		align-items: center;
		width: 40%;
	}

	// right
	.el-form {
		width: 32rem;
		background-color: #5e341c;
		padding: 4.4rem 2rem 1rem 3rem;
		margin-left: 1.8rem;

		.form-label {
			color: white;
			font-size: large;
		}
	}

	.title {
		font-size: 3rem;
		text-align: center;
		padding-bottom: 3.2rem;
		text-decoration: underline;
		color: white;
	}

	.btn-warrper {
		padding-top: 2rem;
		.el-button{
			width: 20rem;
		}

	}

	.a-warrper {
		margin-top: 5rem;
		height: 2rem;
		color: #7fb7ca;
		font-size: 1.6rem;
		padding-bottom: 2rem;
		text-decoration: underline;
	}

}

#login-view {
	display: flex;
	height: 100vh;
}
</style>
