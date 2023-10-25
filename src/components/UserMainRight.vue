<script setup lang="ts">
import UserMainButton from './UserMainButton.vue';
import IconEnterprise from './icons/IconEnterprise.vue';
import IconHotel from './icons/IconHotel.vue';
import IconCard from './icons/IconCard.vue';
import IconTrain from './icons/IconTrain.vue';
import IconPlane from './icons/IconPlane.vue';
import IconWaterDrop from './icons/IconWaterDrop.vue';

const items: string[] = ['电视馆', '手机', '空调馆', '游戏本', '冰箱馆', '轻薄本', '洗衣机馆', '台式机', '厨房馆', '平板', '小家电馆', '键盘', '居家馆', '鼠标'];

function onItemClick(content: string): void {
	console.log(content);
}
</script>

<template>
	<div class="user-right">
		<div class="top">
			<div class="title">蓝书家电</div>
			<div class="title">蓝书数码</div>
			<div v-for="(item, index) in items" :key="index" class="item" @click="onItemClick(item)">
				{{ item }}
			</div>
		</div>
		<div class="bottom">
			<UserMainButton text="企业购">
				<IconEnterprise />
			</UserMainButton>
			<UserMainButton text="酒店">
				<IconHotel />
			</UserMainButton>
			<UserMainButton text="礼品卡">
				<IconCard />
			</UserMainButton>
			<UserMainButton text="火车票">
				<IconTrain />
			</UserMainButton>
			<UserMainButton text="机票">
				<IconPlane />
			</UserMainButton>
			<UserMainButton text="加油卡">
				<IconWaterDrop height="32" />
			</UserMainButton>
		</div>
	</div>
</template>

<style scoped lang="less">
.user-right {
	display: flex;
	flex-direction: column;
}

.top {
	flex-grow: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-top: 8rem;
	margin-bottom: 5rem;
	border: gray solid .1rem;
	font-size: 1.8rem;
	grid-gap: 1px;

	.title {
		background-color: #6d4534;
		color: white;
		text-align: center;
	}

	.item {
		text-align: center;
		text-decoration: underline;
		border: .1rem gray solid;
		transition: 0.4s;

		&:hover {
			background-color: #85dec5;
		}

		&:active {
			background: hsla(160, 100%, 37%, 0.2);
		}
	}

}

.bottom {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}
</style>