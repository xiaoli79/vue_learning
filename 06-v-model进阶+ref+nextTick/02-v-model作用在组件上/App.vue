<script setup>
  import { ref } from 'vue';
  import BitSelect from './component/BitSelect.vue';

  // 收集当前选中的城市ID
  const activeId= ref('333')

</script>

<template>

<!-- 
<BitSelect v-model="activeId"/> -->

<!-- 这个↑面的标签等价于下面的标签w -->
  组件标签上的$event指的是emit传递的参数
  <BitSelect
    :modelValue = "activeId"
    @update:modelValue = "activeId = $event"/>
</template>

<style scoped>

</style>