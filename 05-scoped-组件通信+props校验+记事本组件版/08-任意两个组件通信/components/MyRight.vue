<!-- @format -->

<script setup>
  import meipo from '@/eventBus';
  import { ref } from 'vue';


  // 织女收到牛郎发来的消息
  meipo.on('biubiubiu',(msg) =>{
    console.log(msg)
    str.value =  msg

    // 织女给牛郎进行回话
    meipo.emit('ZhaNan',"渣男")   
  })






  const str = ref('')


</script>

<template>
  <div class="my-right">
    <h3>织女</h3>
    <p>收到来自牛郎的消息:{{ str }}</p>
  </div>
</template>

<style scoped>
.my-right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100px;
  background: plum;
  color: #fff;
}
</style>