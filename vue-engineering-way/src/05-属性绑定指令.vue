<script setup>
import { ref } from 'vue';
    const msg = ref('Hello Vue3+Vite')

    const url = ref('http://www.baidu.com')

    const imgUrl = ref("C:\Users\Administrator\Desktop\PixPin_2026-04-05_17-07-43.png")

</script>

<template >
    <!--不简写 -->
    <div v-bind:title="msg">
        {{ msg }}
    </div>
    <!-- 简写 -->
    <div :title="msg">
        {{ msg }}
    </div>

    <a v-bind:href="url">百度一下</a>
    <p></p>
    <a :href="url">奶龙搜索引擎</a>

    <img :src="imgUrl">

</template>

<style scoped>

</style>