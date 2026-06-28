<script setup>

  //按需导入useStockStore 函数
  import { useStockStore } from '../02-pinia对象传参/store/stock.js';
    
  // 调用函数，获取仓库
  const stockStore =useStockStore()

  import Add from './components/Add.vue';
  import Sub from './components/Sub.vue';


</script>


<template>


  <h3>根组件</h3>

  库存总数: 
  <input 
    type="number"
    v-model.number="stockStore.stock"/>
  <p>stock的翻倍值{{ stockStore.doubleStock }}</p>
  <div>
    <hr>
    <Add/>
    <hr>
    <Sub/>
  </div>
</template>


<style scoped>

</style>

