<!-- @format -->
<script setup>
	import { ref } from 'vue'
	// 是否激活
	const isActive = ref(true)
</script>

<template>
	<div>
		<!-- 1. 三元绑定 -->
		<p :class="isActive ? 'active' : ''">Active1</p>
		<!-- 2. 对象绑定 -->
		<p :class="{ active: isActive }">Active2</p>
		<!-- 3. 静态class与动态class可以共存，二者会合并 -->
		<p
			class="item"
			:class="{ active: isActive }">
			Active3
		</p>
	</div>
</template>

<style scoped>
	.active {
		color: red;
	}
</style>
