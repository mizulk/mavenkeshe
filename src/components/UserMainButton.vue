<script setup lang="ts">
defineProps<{
	text: string
}>();
</script>

<template>
	<div>
		<div>
			<slot></slot>
		</div>
		<p>{{ text }}</p>
	</div>
</template>

<style scoped>
p{
	margin-top: .2rem;
	color: #b3b3b3;
}
</style>