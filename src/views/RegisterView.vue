<script setup lang="ts">
import { register } from "@/api/user";
import type { UserRegisterForm } from "@/api/user/type";
import InconLogo from "@/components/icons/InconLogo.vue";
import {
	ElMessage,
	ElMessageBox,
	type FormInstance,
	type FormRules,
} from "element-plus";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const registerFromRef = ref<FormInstance>();

const router = useRouter();

const registerFrom = reactive<UserRegisterForm>({
	userName: "",
	password: "",
	password2: "",
	gender: 0,
});

const isChecked = ref(false);

const rules = reactive<FormRules<UserRegisterForm>>({
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
	password2: [
		{
			required: true,
			message: "请输入密码",
			trigger: "blur",
		},
		{
			validator: (_rule, value, callback) => {
				if (registerFrom.password.length != value.length)
					callback(new Error("两次输入的密码长度不相等"));
				else if (registerFrom.password != value)
					callback(new Error("两次输入的密码不相等"));
				else if (value.length < 6 && value.length > 32)
					callback(new Error("密码大于6位并且小于32位"));
				else callback();
			},
			trigger: "blur",
		},
	],
});

const onRegisterBtnClick = async (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	if (!isChecked.value) {
		ElMessageBox.alert("请先阅读并勾选用户协议在进行注册！");
		return;
	}
	await formEl.validate((valid: boolean) => {
		if (valid) {
			register(registerFrom)
				.then((result) => {
					if (result.data.code == 1) {
						ElMessage({
							message: "注册成功，页面将于三秒后跳转到登录页面",
							type: "success",
						});
						setTimeout(() => {
							router.push({
								path: "/login",
							});
						}, 3000);
					} else {
						ElMessage({
							message: "注册失败",
							type: "error",
						});
					}
				})
				.catch((e) => {
					console.log("注册时出现错误", e);
				});
		} else {
			ElMessage({
				message: "请检查你的输入的信息是否完整",
				type: "warning",
			});
		}
	});
};
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
					<RouterLink to="/login">请登录></RouterLink>
				</div>
			</el-header>
			<!-- <hr> -->
			<el-main class="register-main">
				<el-form
					:model="registerFrom"
					label-width="100px"
					ref="registerFromRef"
					:rules="rules">
					<el-form-item label="账号名：" prop="userName">
						<el-input v-model="registerFrom.userName" />
					</el-form-item>
					<el-form-item label="密码：" prop="password">
						<el-input
							v-model="registerFrom.password"
							type="password" />
					</el-form-item>
					<el-form-item label="确认密码：" prop="password2">
						<el-input
							v-model="registerFrom.password2"
							type="password" />
					</el-form-item>
					<el-form-item>
						<el-checkbox v-model="isChecked">
							已阅读并同意以下协议<RouterLink to="/about"
								>小蓝书平台服务协议</RouterLink
							>
						</el-checkbox>
					</el-form-item>
					<el-form-item>
						<el-button
							class="register-btn"
							color="#5c341b"
							@click="onRegisterBtnClick(registerFromRef)">
							<span style="color: white">注册</span>
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
	border-bottom: #e3e3e2 solid 0.7rem;

	.logo > span {
		display: inline-block;
		font-size: 4rem;
		margin-left: 1rem;
		color: #5c341b;
	}

	.login {
		font-size: 2.8rem;

		> span {
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
