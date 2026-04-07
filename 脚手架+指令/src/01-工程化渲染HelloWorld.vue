
<script>
//setup不简写的代码
  export default{
    setup(){
      //声明数据
      const msg = 'Hello Vue3+Vite'


      //返回数据
      return{
        msg
      }
    }
  }
</script>


<template>
  <p>{{msg}}</p>
</template>


<style scoped>

</style>
