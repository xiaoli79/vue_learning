<script setup>
import { reactive } from 'vue';

  const goods = reactive({
    name:'',
    price:''
  })

</script>

<template>
  <div>
    <!-- lazy修饰符 -->
    <!-- 名称:
    <input
      type="text"
      v-model.lazy="goods.name"/><br/><br/> -->


    <!-- .trim修饰符，去掉前后空格 -->
    名称:
    <input
      type="text"
      v-model.trim="goods.name"/><br/><br/>

    <!-- .number修饰符，把字符串转换成数字-->
    价格
    <input
      type="text"
      v-model.number="goods.price"/><br/><br/>

  </div>
</template>

<style scoped>


</style>