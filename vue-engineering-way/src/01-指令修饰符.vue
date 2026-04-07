
<script setup>


  // // 处理按键函数
  // const onKeyDown = () =>{
  //   console.log('onKeyDown')
  // }

  const onPClick = () => {
    console.log("onPClick")
  }


  const onDivClick = () => {
    console.log("onDivClick")
  }


</script>

<template>
  <div @click="onDivClick">
    <!-- 只有回车才会触发按键修饰符 -->
    <!-- <input 
      type="text" 
      @keydown.enter="onKeyDown"> -->

    <!--.prevent: 阻止默认行为  -->
    <a 
      href="https://baidu.com"
      @click.prevent>
      百度一下
    </a>
    <!-- 这里面的click.stop是禁止向上传递，也就是阻止冒泡 -->
    <p @click.stop="onPClick"></p>


    <!-- 修饰符的链式调用: 表明两个同时阻止 -->
    <a 
      href="https://baidu.com"
      @click.prevent.stop>
      百度一下
    </a>    
  </div>



</template>


<style scoped>
    div {
        width: 400px;
        height: 200px;
        background: plum;
    }
    div a {
        display: block;
        width: 100px;
        text-decoration: none;
        background: tomato;
        text-align: center;
        color: #fff;
    }
    div p {
        width: 200px;
        height: 100px;
        background: rebeccapurple;
    }
</style>