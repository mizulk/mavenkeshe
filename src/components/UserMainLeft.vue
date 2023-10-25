<script setup lang="ts">
import IconLightning from './icons/IconLightning.vue';
import ShortItem from './ShortItem.vue';
</script>

<template>
	<div class="left">
		<div class="top">
			<div class="hot-item">f</div>
			<el-carousel trigger="click">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3 text="2xl">{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="bottom">
			<div class="btn">
				<p class="title">蓝书秒杀</p>
				<p class="icon">
					<IconLightning />
				</p>
				<p class="time">00:00开始</p>
			</div>
			<ShortItem name="星达遥控器可连接蓝牙" price="59.9" src="" />
			<ShortItem name="iPhone 13(A2634)" price="5999.9" src="" />
		</div>
	</div>
</template>

<style scoped>
.top {
	display: flex;
	flex-direction: row;

	.hot-item {
		flex-grow: 1;
		background-color: #aaa;
		margin-top: 1rem;
		margin-right: 2rem;
	}

	.el-carousel {
		height: 45rem;
		min-width: 4rem;
		flex-grow: 3;
		margin: 1rem;
	}
}

.bottom {
	flex-grow: 1;
	display: flex;
	align-items: center;
	margin-top: 2rem;

	.btn {
		padding: .2rem 5rem;
		background-color: #5ea49a;
		font-size: 3rem;

		.title {
			color: white;
		}

		.icon {
			display: flex;
			justify-content: center;
			padding: .6rem 0;
		}

		.time {
			color: #bedfbe;
		}
	}
}

.left {
	min-height: 13rem;
	display: flex;
	flex-direction: column;
}
</style>