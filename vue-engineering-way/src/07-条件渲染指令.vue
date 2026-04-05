<script setup>
import { ref } from 'vue';

   const visible = ref(true)


    //模拟是否登录
   const isLogin = ref(true)



   const mark = ref(100)
</script>



<template>
    <div>
        <!-- v-show -->
        <div class="red"
             v-show = "visible"></div>
        <!-- v-if -->
        <div class="green"
             v-if = "visible"></div>


        <hr/>
        <!-- v-if 与v-else配合使用 -->
        <div v-if ="isLogin">奶龙，欢迎你回来</div>
        <div v-else>你好，请登录</div>


        <hr/>

        <!-- v-if配合v-else-if和v-else做多分支渲染 -->
        <div v-if="mark >= 90">优秀</div>
        <div v-else-if="mark >= 70">良好</div>
        <div v-else>差</div>
         
    </div>
</template>




<style scoped>
    .red,
    .green{
        width: 200px;
        height: 200px;
    }

    .red{
        background: red;
    }
    .green{
        background: green;
    }
</style>