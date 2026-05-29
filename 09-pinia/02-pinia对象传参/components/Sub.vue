
<script setup>
    //按需导入useStockStore 函数
    import { useStockStore } from '../store/stock';
    // 调用函数，获取仓库
    const stockStore =useStockStore()
</script>


<template>
    <div class="sub">
        <h3>Sub组件</h3>
        <p>已知库存数：{{ stockStore.stock }}</p>
        <button @click="stockStore.subStock">库存-1</button>
    </div>
</template>


<style scoped></style>