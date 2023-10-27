<script setup lang="ts">
import IconLightning from "./icons/IconLightning.vue";
import ShortItem from "./ShortItem.vue";
import Item1 from '@/assets/item.jpg'
import Item2 from '@/assets/item2.jpg'
import Item3 from '@/assets/item3.jpg'
import Q1 from '@/assets/q1.jpg'
import Q2 from '@/assets/q2.jpg'
import Q3 from '@/assets/q3.jpg'
import A from '@/assets/a.jpg'

const Qs = [Q1,Q2,Q3]
</script>

<template>
	<div class="left">
		<div class="top">
			<div class="hot-item"><img :src="A"></div>
			<el-carousel trigger="click">
				<el-carousel-item v-for="item,index in Qs" :key="index">
					<img class="carousel-item" :src="item" alt="">
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
			<ShortItem
				name="星达遥控器可连接蓝牙"
				price="59.9"
				:src="Item1" />
			<ShortItem
				name="iPhone 13(A2634)"
				price="5999.9"
				:src="Item2" />
			<ShortItem
				name="iPhone 13(A2634)"
				price="5999.9"
				:src="Item3" />
		</div>
	</div>
</template>

<style scoped>
.top {
	display: flex;
	flex-direction: row;

	.hot-item {
		flex-grow: 1;
		margin-top: 1rem;
		>img{
			height: 46rem;
		}
	}

	.el-carousel {
		height: 45rem;
		min-width: 4rem;
		flex-grow: 3;
		margin: 1rem;
	}
}
.carousel-item{
	display: block;
}
.bottom {
	flex-grow: 1;
	display: flex;
	align-items: center;
	margin-top: 2rem;

	.btn {
		padding: 0.2rem 5rem;
		background-color: #5ea49a;
		font-size: 3rem;

		.title {
			color: white;
		}

		.icon {
			display: flex;
			justify-content: center;
			padding: 0.6rem 0;
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
