<script setup>
import { inject } from 'vue';

    const money = inject('qian')


</script>


<template>
    <div class="my-child">
        <h3>MyChild组件</h3>
        <p>收到爷爷来的小目标 ={{ money }} </p>
    </div>
</template>



<style scoped>
    .my-child{
        padding: 20px;
        background : palegoldenrod
    }
</style>