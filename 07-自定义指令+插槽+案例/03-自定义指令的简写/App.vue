<script setup>
import { ref } from 'vue';

const colorStr = ref('purple')
  
</script>

<template>
  <!-- 使用自定义指令，并绑定表达式 -->
  <div v-color ="colorStr">闫路甲是我儿子</div>
</template>



<style scoped>

</style>