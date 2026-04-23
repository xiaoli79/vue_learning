<script setup>
import { computed } from 'vue';





// //简写 计算属性只读不可改
// const uname = computed(()=>{
//     return '姬霓太美'
//  })
   const uname = computed({
    get(){
      return '姬霓太美'
    },
    
    //要给计算属性赋予的新值
    //只要给计算赋值，都会触发set函数去执行
    set(value){
      console.log(value)
    }

   })
</script>



<template>
  <div>
    <input 
      type="text"
      v-model="uname">

  </div>
</template>


<style scoped>

</style>