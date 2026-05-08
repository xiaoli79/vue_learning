<script setup>
import { provide, ref } from 'vue';
import MyParent from './components/MyParent.vue';


  const money = ref(1000000000000)

  provide('qian',money)

</script>



<template>


    <div class="app">
        <h3>App组件</h3>
        <MyParent/>
    </div>
</template>



<style scoped>
    .app{
        width: 400px;
        padding: 20px;
        background: paleturquoise;
    }

</style>