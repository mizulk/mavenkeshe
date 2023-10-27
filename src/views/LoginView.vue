<script setup lang="ts">
import IconLogo from "../components/icons/InconLogo.vue";
import { type UserLoginForm } from "@/api/user/type";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { login } from "@/api/user";
import { userStore } from "@/stores/user";
import { useRouter } from "vue-router";

const router = useRouter();
const store = userStore();
const loginFormRef = ref<FormInstance>();

const loginForm = reactive<UserLoginForm>({
	userName: "",
	password: "",
});

const rules = reactive<FormRules<UserLoginForm>>({
	password: [
		{
			required: true,
			message: "请输入密码",
			trigger: "blur",
		},
		{
			validator: (_rule, value, callback) => {
				if (value.length < 6 && value.length > 32)
					callback(new Error("密码大于6位并且小于32位"));
				else callback();
			},
			trigger: "blur",
		},
	],
	userName: [
		{
			required: true,
			message: "请输入账号",
			trigger: "blur",
		},
	],
});

const onLoginBtnClick = async (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	await formEl.validate((valid: boolean) => {
		if (valid) {
			login(loginForm)
				.then(({ data }) => {
					if (data.code == 1) {
						store.setToken(data.data);
						router.push({ path: "/user" });
					} else {
						ElMessage({
							message: "账号或密码错误！",
							type: "error",
						});
					}
				})
				.catch((e) => {
					console.log("登录出错", e);
				});
		} else {
			ElMessage({
				message: "请输入必填项",
				type: "warning",
			});
		}
	});
};
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
					<el-form
						:model="loginForm"
						label-width="80px"
						ref="loginFormRef"
						:rules="rules">
						<h1 class="title">
							LANSHU小<span style="color: #9dd1e6">蓝</span>书
						</h1>
						<el-form-item prop="userName">
							<template #label>
								<span class="form-label">账号：</span>
							</template>
							<el-input v-model="loginForm.userName" />
						</el-form-item>

						<el-form-item prop="password">
							<template #label>
								<span class="form-label">密码：</span>
							</template>
							<el-input
								v-model="loginForm.password"
								type="password" />
						</el-form-item>
						<el-form-item class="btn-warrper">
							<el-button @click="onLoginBtnClick(loginFormRef)"
								>登录</el-button
							>
						</el-form-item>
						<div class="a-warrper">
							<RouterLink to="/register"
								>还没有账号？快来注册一个吧！</RouterLink
							>
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

	> .logo {
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
		background: url("../assets/login_image.png") no-repeat center;
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

		.el-button {
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
