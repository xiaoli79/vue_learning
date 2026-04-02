
<script setup>
  //按需导入响应式函数ref
  import {ref,reactive}  from 'vue'
  //创建一个ref响应式数据
  const msg = ref('Hello World')
  //创建一个响应式对象
  const obj = reactive({
    name: '小vue',
    age:9
  })
  const fn = () =>{
    return 100
  }
</script>


<template>
  <!-- 表达式有以下几个 -->
  <!-- 1.直接放变量 -->
  <h1>{{msg}}</h1>
  <!-- 2.对象.属性 -->
  <p>我叫{{obj.name}},今天{{obj.name}}岁</p>
  <!-- 3.三元运算 -->
   <p>{{obj.age >= 18 ? '已经成年' : '未成年'}}</p>
   <!--3.算术运算  -->
   <p>小vue,来年就{{obj.age + 1}}</p>
   <!--4.函数的调用 -->
   <p>fn的返回值 = {{fn()}}</p>
   <!--5.方法的调用 -->
   <p>{{msg}} 由{{msg.split(' ').length}}个单词组成</p>
</template>


<style scoped>

</style>
