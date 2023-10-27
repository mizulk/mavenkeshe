<script setup lang="ts">
import InconLogo from "@/components/icons/InconLogo.vue";
import IconDayMode from "@/components/icons/IconDayMode.vue";
import InconUser from "@/components/icons/IconUser.vue";
import UserMainButton from "@/components/UserMainButton.vue";
import { useDark, useToggle } from "@vueuse/core/index.cjs";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const emits = defineEmits<{
	(event: "click"): void;
}>();
</script>

<template>
	<nav class="top-nav">
		<div>商家服务</div>
		<div>手机小蓝书</div>
		<div>我的小蓝书</div>
		<div>我的订单</div>
	</nav>
	<div class="functional-warpper">
		<div class="functional">
			<div class="logo-warpper">
				<InconLogo height="60"></InconLogo>
				<div class="logo"><span>@</span>LANSHU</div>
			</div>
			<div class="search-warpper">
				<slot></slot>
			</div>
			<div class="user-warpper">
				<UserMainButton text="白天模式" @click="toggleDark()">
					<IconDayMode height="60" />
				</UserMainButton>
				<UserMainButton text="登录/注册">
					<InconUser height="60" />
				</UserMainButton>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
.top-nav {
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	height: 3.6rem;
	background-color: #fcf1ba;

	> div {
		margin-right: 4.8rem;
		cursor: pointer;

		&:hover {
			background-color: #c9c094;
		}

		&:active {
			background-color: #958f70;
		}
	}
}

.functional-warpper {
	background-color: #f7f7f7;
}

.functional {
	display: flex;

	> .logo-warpper {
		margin: 0 10rem;
		display: flex;
		flex-direction: column;

		.logo {
			text-align: center;
			color: var(--logo-text-color);
			font-size: 3rem;
			margin-top: 1rem;

			> span {
				margin-right: 1rem;
			}
		}
	}

	.search-warpper {
		flex-grow: 7;
		display: flex;
		align-items: center;
	}

	.user-warpper {
		display: flex;
		flex-grow: 3;
		align-items: center;
		justify-content: space-evenly;
	}
}
</style>
