<script setup>
import MyLeft from './components/MyLeft.vue';
import MyRight from './components/MyRight.vue';

</script>



<template>
    <div class="app">
        <MyLeft/>
        <MyRight/>
    </div>
</template>


<style scoped> 
    .app{
        display: flex;
    }


</style>