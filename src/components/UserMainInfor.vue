<script setup lang="ts">
defineProps<{
	text: string;
}>();
const emit = defineEmits<{
	(event: "on-click"): void;
}>();
</script>

<template>
	<div class="activity">
		<a @click="emit('on-click')">{{ text }}</a>
	</div>
</template>

<style scoped>
.activity {
	margin-left: 4rem;
	cursor: pointer;

	> a {
		text-decoration: underline;
		color: #969696;
		font-size: 2rem;

		&:active {
			background-color: #9bb9ae;
		}
	}
}
</style>
