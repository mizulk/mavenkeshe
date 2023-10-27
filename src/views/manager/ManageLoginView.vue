<script setup lang="ts">
import { managerLogin } from "@/api/manager";
import type { ManagerLoginForm } from "@/api/manager/type";
import InconLogo from "@/components/icons/InconLogo.vue";
import {
	ElMessage,
	ElMessageBox,
	type FormInstance,
	type FormRules,
} from "element-plus";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const managerRef = ref<FormInstance>();
const isLoading = ref(false);

const managerLoginForm = reactive<ManagerLoginForm>({
	name: "",
	password: "",
});

async function onLoginBtnClick(form: FormInstance | undefined) {
	await form?.validate((v: boolean) => {
		if (v) {
			isLoading.value = true;
			managerLogin(managerLoginForm)
				.then(({ data }) => {
					if (data.code == 1) {
						isLoading.value = false;
						router.push({ path: "/manager" });
					} else {
						isLoading.value = false;
						ElMessage({
							message: "密码或账号出现异常",
							type: "error",
						});
					}
				})
				.catch((e) => {
					isLoading.value = false;
					ElMessage({
						message: "登录时出现异常：" + e,
						type: "error",
					});
				});
		} else {
			ElMessageBox.alert("请完善表单项");
		}
	});
}

const rules = reactive<FormRules<ManagerLoginForm>>({
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
	name: [
		{
			required: true,
			message: "请输入账号",
			trigger: "blur",
		},
	],
});
</script>

<template>
	<div class="manager-login">
		<el-container>
			<el-header class="manager-login-header">
				<InconLogo />
				<span>管理员登录</span>
			</el-header>
			<el-main class="manager-login-main">
				<div class="login-panel">
					<el-form
						:model="managerLoginForm"
						label-width="10rem"
						ref="managerRef"
						:rules="rules">
						<h1 class="title">管理员登录</h1>
						<el-form-item prop="name">
							<template #label>
								<span class="form-label">账号：</span>
							</template>
							<el-input v-model="managerLoginForm.name" />
						</el-form-item>
						<el-form-item prop="password">
							<template #label>
								<span class="form-label">密码：</span>
							</template>
							<el-input
								v-model="managerLoginForm.password"
								type="password"
								clearable />
						</el-form-item>
						<el-form-item>
							<el-button
								class="btn-warpper"
								@click="onLoginBtnClick(managerRef)"
								:loading="isLoading"
								>登录</el-button
							>
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

	span {
		margin-left: 4rem;
		font-size: 4rem;
		color: var(--logo-text-color);
	}
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
