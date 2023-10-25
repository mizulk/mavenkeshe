<script setup lang="ts">
import InconLogo from '@/components/icons/InconLogo.vue';
import IconDayMode from '@/components/icons/IconDayMode.vue';
import InconUser from '@/components/icons/IconUser.vue';
import UserMainButton from '@/components/UserMainButton.vue';
import UserMainInfor from '@/components/UserMainInfor.vue';
import UserMainLeft from '@/components/UserMainLeft.vue';
import UserMainRight from '@/components/UserMainRight.vue';

import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core/index.cjs';

const searchContext = ref("");

const toggleDark = useToggle(useDark());
</script>

<template>
	<div id="user-main">
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
					<el-input size="large" v-model="searchContext" />
					<el-button color="#5c341b" size="large">
						<span style="color: white;">搜索</span>
					</el-button>
				</div>
				<div class="user-warpper">
					<UserMainButton text="白天模式">
						<IconDayMode height="60"></IconDayMode>
					</UserMainButton>
					<UserMainButton text="登录/注册">
						<el-avatar :size="62">
							<InconUser height="60"></InconUser>
						</el-avatar>
					</UserMainButton>
				</div>
			</div>
			<div class="infor">
				<div class="describe">
					美好生活 就在小蓝书！
				</div>
				<UserMainInfor text="点击此处领卷 双十一满100" @on-click="console.log('fdfsf')" />
			</div>
		</div>
		<div class="main-warpper">
			<UserMainLeft class="left"/>
			<UserMainRight class="right"/>
		</div>
	</div>
</template>

<style lang="less" scoped>
.top-nav {
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	height: 3.6rem;
	background-color: #fcf1ba;

	>div {
		margin-right: 4.8rem;
	}
}

.functional-warpper {
	background-color: #f7f7f7;
}

.functional {
	display: flex;

	>.logo-warpper {
		margin: 0 10rem;
		display: flex;
		flex-direction: column;

		.logo {
			text-align: center;
			color: var(--logo-text-color);
			font-size: 3rem;
			margin-top: 1rem;

			>span {
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

.infor {
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	color: #969696;

	>.describe {
		margin-left: 10rem;
		font-size: 2rem;
	}
}

.main-warpper {
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	margin: 0 8rem;

	>.left {
		flex-grow: 1;
	}

	>.right {
		padding: 0 5rem;
	}
}

#user-main {
	height: 100vh;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
}
</style>