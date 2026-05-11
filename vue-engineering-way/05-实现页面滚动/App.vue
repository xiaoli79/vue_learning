<script setup>
	import { onMounted, ref } from 'vue';
	import BitCard from './component/bit-card.vue'

	const divRef = ref(null)
	onMounted(() => {
		setTimeout(() => {
			divRef.value.scrollIntoView({
				behavior: 'smooth'
			})
		}, 300)
	})
</script>

<template>
	<div class="container">
		<div class="bit-header">
			<div class="main">头部内容</div>
		</div>
		<div class="bit-body">
			<div class="main">
				<div class="bit-c">
					<h3>C语言</h3>
					<div class="courseList">
						<bit-card
							bgColor="powderblue"
							v-for="n in 8"
							:key="n" />
					</div>
				</div>
				<div class="bit-ds">
					<h3>数据结构</h3>
					<div class="courseList">
						<bit-card
							bgColor="palevioletred"
							v-for="n in 8"
							:key="n" />
					</div>
				</div>
				<div
					class="bit-java"
					ref="divRef">
					<h3>Java</h3>
					<div class="courseList">
						<bit-card
							bgColor="purple"
							v-for="n in 8"
							:key="n" />
					</div>
				</div>
			</div>
		</div>
		<div class="bit-footer">
			<div class="up"></div>
			<div class="down">
				<div class="main">底部内容</div>
			</div>
		</div>
	</div>
</template>

<style>
	* {
		margin: 0;
		padding: 0;
	}
</style>
<style lang="scss" scoped>
	.container {
		.bit-header {
			display: flex;
			justify-content: center;
			height: 80px;
			line-height: 80px;
			background: #fff;
			box-shadow: 0 3px 6px 0 rgba(7, 35, 68, 0.15);
			.main {
				width: 1200px;
			}
		}
		.bit-body {
			display: flex;
			justify-content: center;
			background: #f6f8fa;
			h3 {
				margin-bottom: 15px;
			}
			.main {
				width: 1200px;
				.bit-c {
					padding: 20px 0;
				}
				.bit-ds {
					margin: 40px 0;
					padding: 20px 0;
				}
				.bit-java {
					padding: 20px 0;
				}
				.courseList {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-evenly;
				}
				h3 {
					padding-left: 15px;
					border-left: 6px solid #2889ff;
					font-size: 24px;
					font-weight: normal;
				}
			}
		}
		.bit-footer {
			box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.1);
			color: #fff;
			.up {
				width: 100%;
				height: 66px;
				background: #f5f7fd;
			}
			.down {
				display: flex;
				justify-content: center;
				height: 200px;
				line-height: 200px;
				background: #2d2d3a;
				.main {
					width: 1200px;
					margin: 0 auto;
				}
			}
		}
	}
</style>
