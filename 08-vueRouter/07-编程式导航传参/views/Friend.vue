<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute()

    console.log(route)

</script>


<template>
     <div class="find">
        <p>朋友音乐</p>
        <p>👭音乐</p>
        <!-- <p>人坤音乐...{{ route.query.id }}</p> -->
         <p>人坤音乐....{{ route.params.id}}</p>
    </div>   
</template>


<style scoped></style>
