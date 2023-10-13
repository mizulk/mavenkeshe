<script setup lang="ts">
defineProps<{
	msg: string;
}>();
</script>

<template>
	<div>hello {{ msg }}</div>
</template>

<style scoped lang="less"></style>
