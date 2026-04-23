<script setup>
import { ref } from 'vue';

// 导航列表
const navList = [
  {
    id: 101001,
    name: '首页'
  },
  {
    id: 101002,
    name: '鹏哥C语言'
  },
  {
    id: 101003,
    name: '比特就业课'
  },
  {
    id: 101004,
    name: '有问必答'
  },
  {
    id: 101005,
    name: '关于比特'
  }]

  const currentIndex =ref(0)
  
</script>

<template>
  <div class="bit-header">
    <div class="main">
      <div class="logo">
        <a href="https://bitejiuyeke.com/index" target="_blank">
          <img
            width="133"
            height="34"
            src="https://bitejiuyeke.com/img/logo.4dd87641.png"
            alt="比特就业课"
          />
        </a>
      </div>
      <ul>
        <li v-for="(item,index) in navList"::key="navList.id" @click=" currentIndex = index">
          <a href="#" :class="{active:index === currentIndex}">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
	* { 
		margin: 0;
		padding: 0;
	}
	a {
		display: block;
		padding: 12px 16px;
		margin: 0 15px;
		text-decoration: none;
		color: #909399;
		transition: color 1s;
		font-family: Microsoft YaHei UI;
		&:hover {
			color: #303133;
		}
	}
	.bit-header {
		background: #fff;
		box-shadow: 0 3px 6px 0 rgba(7, 35, 68, 0.15);
		.main {
			display: flex;
			align-items: center;
			width: 1200px;
			height: 80px;
			margin: 0 auto;
			.logo {
				margin-right: 37px;
			}
			ul {
				display: flex;
				align-items: center;
				list-style: none;
				li a.active {
					border-bottom: 2px solid #409eff;
					color: #303133;
				}
			}
		}
	}
</style>  