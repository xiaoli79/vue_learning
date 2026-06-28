<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute()
    console.log(route)

</script>


<template>
    <div class="friend">
        <p>我的朋友</p>
        <p>我的朋友</p>
        <p>我的朋友的id = {{ route.query.id }}</p>
        <p>我的朋友的name = {{ route.query.name }}</p>
    </div>
</template>


<style scoped></style>