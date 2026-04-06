<script setup>
    import { ref } from 'vue';
    
    //计数器
    const count =ref(0)


    const increase = () =>{
        count.value++
    }

    const add = (n) =>{
        count.value += n
    }
</script>

<template>
    <div>
        <p>{{ count }}</p>
        
        <!-- //直接写函数 -->
        <button v-on:click="count++">+1</button>
        <!-- //调用无参函数 -->
        <button v-on:click="increase">+1</button>
        <!-- //调用有参函数 -->
        <button v-on:click="add(3)">+3</button>
        <button v-on:click="add(5)">+5</button>
        <!-- 简写@click -->
        <button @click="add(6)">+6</button>

    </div>


</template>

<style scoped>

</style>