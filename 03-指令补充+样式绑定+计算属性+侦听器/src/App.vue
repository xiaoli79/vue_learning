<script setup>
import { nextTick, ref, stop } from 'vue';





const images = [
  'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fffa0f9be4b071da45d9a0c2.jpg',
  'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fffa0fa3e4b071da45d9a0c3.jpg',
  'https://bit-1256306791.cos.ap-chengdu.myqcloud.com/fffa10ace4b071da45d9a0c4.jpg'
]


//展示的图片下标，默认值是0
const i = ref(0)



const next = () =>{
  if(i.value != images.length-1){
    i.value++;
  }else{
    i.value = 0
  }

}

const prev = () =>{
  if(i.value != 0){
    i.value--;
  }else{
    i.value= images.length -1;
  }
}

//用来记录定时器的id
let timer = null
//自动播放
const play = () =>{
  timer = setInterval(()=>{
    next()
  },3000)
}



// 初始化调用自动播放函数
play()


// 当鼠标进入的时候，会吧定时器给清掉，也就是说自动播放失效
const stop1 = () =>{
  // console.log("鼠标进入定时器")
  clearInterval(timer)
}
</script>

<template>
  <div 
    class="banner" 
    @mouseenter="stop1"
    @mouseleave="play">
    <ul>
      <li 
        :class="{active: index === i}" 
        v-for="(url,index) in images":key="index">
        <img
          :src="url"
        />
      </li>
    </ul>


    <!-- 指示器 -->
    <div class="indicator">
      <span 
        :class="{active : index === i}"
        v-for="(n,index) in images.length"
        :key=n
        @click="i = index"></span>
    </div>

    <div class="ctrl">
      <a href="javascript:;" class="btn prev" @click="prev">&lt;</a>
      <a href="javascript:;" class="btn next" @click="next">&gt;</a>
    </div>
  </div>
</template>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	a {
		text-decoration: none;
		color: #000;
	}

	.banner {
		position: relative;
		width: 1200px;
		height: 337px;
		margin: 150px auto;
	}
	.banner ul {
		width: 100%;
		height: 100%;
		list-style: none;
	}

	.banner ul li {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 1.2s;
	}
	.banner ul li.active {
		opacity: 1;
	}

	.banner .indicator {
		display: flex;
		justify-content: center;
		position: absolute;
		left: 0;
		bottom: 20px;
		width: 100%;
	}

	.banner .indicator span {
		width: 30px;
		height: 2px;
		margin: 0 5px;
		cursor: pointer;
		background: rgba(255, 2555, 255, 0.6);
	}
	.banner .indicator span.active {
		background: rgba(255, 255, 255, 1);
	}
	.btn {
		position: absolute;
		top: 50%;
		width: 30px;
		height: 30px;
		line-height: 30px;
		margin-top: -15px;
		font-size: 14px;
		text-align: center;
		background: rgba(0, 0, 0, 0.3);
		color: #fff;
		border-radius: 50%;
	}
	.btn.prev {
		left: 15px;
	}
	.btn.next {
		right: 15px;
	}
</style>