
<script setup>
import { onMounted, ref } from 'vue';
  //准备ref响应式数据
  const divRef = ref(null)

  //组件挂载后
  onMounted(()=>{

    // 获取原生div
    console.log(divRef.value)

    // 设置div字体颜色为例(DOM操作的代码)
    divRef.value.style.color = 'red'
  })

</script>


<template>
  <!-- 给目标元素添加ref属性并绑定数据 -->
  <div ref="divRef"> Some Text....</div>
</template> 

<style scoped>

</style>