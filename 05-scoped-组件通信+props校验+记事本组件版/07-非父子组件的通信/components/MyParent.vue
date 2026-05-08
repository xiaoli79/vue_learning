<script setup>
import MyChild from './MyChild.vue';

</script>



<template>
    <div class="my-parent">
        <h3>MyParent组件</h3>
        <MyChild/>
    </div>

</template>




<style scoped>
    .my-parent{
        padding: 20px;
        background: plum;
    }
</style>