<!-- @format -->

<script setup></script>

<template>
	<div class="bit-footer">
		<div class="up"></div>
		<div class="down">
			<div class="main">底部内容</div>
		</div>
	</div>
</template>

<style>
	.bit-footer {
		box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.1);
		color: #fff;
	}

	.bit-footer .up {
		width: 100%;
		height: 66px;
		background: #f5f7fd;
	}
	.bit-footer .down {
		display: flex;
		justify-content: center;
		height: 200px;
		line-height: 200px;
		background: #2d2d3a;
	}
	.bit-footer .down .main {
		width: 1200px;
	}
</style>
