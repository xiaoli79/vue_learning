<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute()

    console.log(route)

</script>


<template>
    <div class="friend">
        <p>我的朋友</p>
        <p>路径参数 fid = {{ route.params.fid }}</p>
    </div>
</template>


<style scoped></style>
