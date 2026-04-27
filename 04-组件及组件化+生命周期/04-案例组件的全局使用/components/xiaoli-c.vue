<!-- @format -->

<template>
	<div class="bit-c">
		<h3>C语言</h3>
		<div class = "cCourseList">
			<XiaoliCard  v-for="n in 5"></XiaoliCard>			
		</div>
	</div>
</template>

<script setup>
import XiaoliCard from './xiaoli-card.vue';

</script>

<style>
	.bit-c {
		padding: 20px 0;
	}
	
	.cCourseList{
		display: flex;
	}
</style>
