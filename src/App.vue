<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
	<div>
		<h1>2023年软件配置课设</h1>
		<HelloWorld msg="world"></HelloWorld>
		<el-button type="primary" @click="toggleDark()">Primary {{ isDark }}</el-button>
	</div>
</template>

<style scoped lang="less"></style>
