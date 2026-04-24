<script setup>
import { reactive, ref,watch } from 'vue';
const keyword =ref('')





//监听器，监听了值
watch(keyword,(newVal,oldVal) =>{
  console.log(newVal,oldVal)
})


const obj = reactive({
  username:"",
  password:""
})


//监听器，监听了对象的改变
watch(obj,(newVal,oldVal)=>{
  //由于对象是引用类型，对象的值变了，指向的是同一块，所以oldVal和newVal的值一样
  console.log(newVal,oldVal)
  console.log(newVal === oldVal)
})
</script>


<template>
  <div>
    <input type="text"
           v-model="keyword"
           placeholder="请输入关键字">
  </div>
  <br>
  <br>
    <input type="text"
           v-model="obj.username"
           placeholder="请输入用户名">  

  <br>
  <br>
    <input type="text"
           v-model="obj.password"
           placeholder="请输入密码">    
</template>


<style scoped></style>