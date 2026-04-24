
<script setup>
 import xiaoliC from './xiaoli-c.vue';
 import xiaoliDs from './xiaoli-ds.vue';
 import xiaoliJava from './xiaoli-java.vue';

</script>



<template>
	<div class="bit-body">
		<div class="main">
			<!-- 烤串法的标签名（推荐，符合W3C的标准，所有标签一律小写） -->
             <xiaoli-c></xiaoli-c>
             <xiaoli-ds></xiaoli-ds>
             <xiaoli-java></xiaoli-java>
			<!-- 大驼峰的标签名 -->
			<!-- <BitC />
			<BitDs />
			<BitJava /> -->
		</div>
	</div>
</template>
<style>
	.bit-body {
		display: flex;
		justify-content: center;
		background: #f6f8fa;
	}
	.bit-body h3 {
		margin-bottom: 15px;
	}
	.bit-body .main {
		width: 1200px;
	}
</style>