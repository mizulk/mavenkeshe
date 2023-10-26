<script setup lang="ts">
defineProps<{
	text: string;
}>();
const emit = defineEmits<{
	(event: "click"): void;
}>();
</script>

<template>
	<div @click="emit('click')" class="user-main-btn">
		<div>
			<slot></slot>
		</div>
		<p>{{ text }}</p>
	</div>
</template>

<style scoped>
p {
	margin-top: 0.2rem;
	color: #b3b3b3;
}

.user-main-btn {
	padding: 1rem;
	transition: 0.4s;
	cursor: pointer;

	&:hover {
		background-color: #85dec5;
	}

	&:active {
		background: hsla(160, 100%, 37%, 0.2);
	}
}
</style>
