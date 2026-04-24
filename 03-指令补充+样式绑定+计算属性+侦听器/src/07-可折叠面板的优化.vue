<script setup>
import { ref } from 'vue';

    const visible = ref(true)


</script>


<template>
	<h3>可折叠面板</h3>
	<div class="panel">
    
    <!-- 如果是展开，将底边框置为透明色，合起来，把底边框置为#ccc -->
		<div class="title" :style="{borderBottomColor:visible ? 'transparent' :'#ccc'}">
			<h4>自由与爱情</h4>
			<span
				class="btn"
				@click="visible = !visible">
				{{ visible ? '收起' : '展开' }}
			</span>
		</div>

		<div
			class="container"
			v-show="visible">
			<p>生命诚可贵,</p>
			<p>爱情价更高。</p>
			<p>若为自由故，</p>
			<p>两者皆可抛。</p>
		</div>
	</div>
</template>

<style lang="scss">
	// 注意：当前App编写样式用到了 sass 预处理器语法，
	// 脚手架工程默认不支持 css 预处理器的编译，需要安装相应的模块
	// npm i -D sass-embedded
	// npm i sass-embedded -D
	body {
		background-color: #ccc;
	}

	#app {
		width: 400px;
		margin: 20px auto;
		padding: 1em 2em 2em;
		box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
		background-color: #fff;
	}
	#app h3 {
		text-align: center;
	}

	.panel {
		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 1em;
			border: 1px solid #ccc;
		}
		.title h4 {
			line-height: 2;
			margin: 0;
		}
		.container {
			border: 1px solid #ccc;
			padding: 0 1em;
		}
		.btn {
			cursor: pointer;
		}
	}
</style>