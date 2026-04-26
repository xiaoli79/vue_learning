<!-- @format -->

<script setup></script>

<template>
	<div class="bit-card">
		<div class="img"></div>
		<div class="desc">
			<h3>内容标题</h3>
			<p>主讲人: xxx</p>
			<p class="exercise">立即练习 &gt;&gt;</p>
		</div>
	</div>
</template>

<style>
	.bit-card {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		width: 285px;
		box-shadow: 1px 3px 14px 0 rgba(70, 82, 88, 0.2);
		border-radius: 6px;
		cursor: pointer;
	}
	.bit-card .img {
		height: 204px;
		background: plum;
	}
	.bit-card .desc {
		display: flex;
		flex-direction: column;
		padding: 15px 15px 30px 15px;
	}
	.bit-card .desc p.exercise {
		font-size: 14px;
		text-align: right;
		color: #2689ff;
	}
</style>
