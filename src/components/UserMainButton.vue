<script setup lang="ts">
defineProps<{
	text: string
}>();
<<<<<<< HEAD
const emit = defineEmits<{
	(event: 'click'): void
}>();
</script>

<template>
	<div @click="emit('click')" class="user-main-btn">
=======
</script>

<template>
	<div>
>>>>>>> 825d5b5721ad9df496a53fe424268ace11a86971
		<div>
			<slot></slot>
		</div>
		<p>{{ text }}</p>
	</div>
</template>

<style scoped>
<<<<<<< HEAD
p {
	margin-top: .2rem;
	color: #b3b3b3;
}

.user-main-btn{
	padding: 1rem;
	transition: 0.4s;

	&:hover{
		background-color: #85dec5;
	}

	&:active{
		background: hsla(160, 100%, 37%, 0.2);
	}
}
=======
p{
	margin-top: .2rem;
	color: #b3b3b3;
}
>>>>>>> 825d5b5721ad9df496a53fe424268ace11a86971
</style>