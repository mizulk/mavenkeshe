<script setup lang="ts">
defineProps<{
	text: string
}>();
const emit = defineEmits<{
	(event: 'on-click'): void
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

	>a {
		text-decoration: underline;
		color: #969696;
		font-size: 2rem;
<<<<<<< HEAD

		&:active{
			background-color: #9bb9ae;
		}
=======
>>>>>>> 825d5b5721ad9df496a53fe424268ace11a86971
	}
}
</style>