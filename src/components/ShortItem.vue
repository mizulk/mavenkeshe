<script setup lang="ts">
defineProps<{
	name: string;
	price: string;
	src: string;
}>();
</script>

<template>
	<div class="item">
		<img :src="src" />
		<div class="describe">
			<p class="name">{{ name }}</p>
			<p class="price">{{ price }} 元</p>
		</div>
	</div>
</template>

<style scoped>
.item {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 1.4rem;
	transition: 0.4s;
	box-sizing: border-box;
	border: #85dec5 solid 0.2rem;

	&:hover {
		background-color: #85dec5;
	}

	&:active {
		background: hsla(160, 100%, 37%, 0.2);
	}
}

img {
	display: block;
	min-height: 15rem;
	min-width: 15rem;
}

.describe {
	display: flex;
	flex-direction: column;
	width: 10rem;
	justify-content: space-evenly;
	text-align: center;

	.name {
		color: gray;
	}

	.price {
		margin-top: 1.2rem;
		font-size: 2.8rem;
		color: #6b645c;
	}
}
</style>
