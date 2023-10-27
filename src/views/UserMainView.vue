<script setup lang="ts">
import UserHader from "@/components/UserHader.vue";
import UserMainInfor from "@/components/UserMainInfor.vue";
import UserMainLeft from "@/components/UserMainLeft.vue";
import UserMainRight from "@/components/UserMainRight.vue";


</script>

<template>
	<div id="user-main">
		<UserHader />
		<div class="infor">
			<div class="describe">美好生活 就在小蓝书！</div>
			<UserMainInfor
				text="点击此处领卷 双十一满100"
				@on-click="console.log('fdfsf')" />
		</div>
		<div class="main-warpper">
			<UserMainLeft class="left" />
			<UserMainRight class="right" />
		</div>
	</div>
</template>

<style lang="less" scoped>
.infor {
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	color: #969696;

	> .describe {
		margin-left: 10rem;
		font-size: 2rem;
	}
}

.main-warpper {
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	margin: 0 8rem;

	> .left {
		flex-grow: 1;
	}

	> .right {
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
