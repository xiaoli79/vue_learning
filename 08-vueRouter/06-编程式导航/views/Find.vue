<script setup>
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';



    //获取路由实例
    const router = useRouter();
    

    // 在挂载2s后自动跳转
    onMounted(() =>{
        setTimeout(() =>{

            //传的字符串
            router.push('/friend')

            // //传的对象
            // router.push({
            //     path: '/friend'
            // })

            // //传的name属性
            // router.push({
            //     name: '/friend'
            // })
        },2000)
    })
</script>


<template>
    <div class="find">
        <p>发现音乐</p>
        <p>发现音乐</p>
        <p>发现音乐...</p>
    </div>
</template>


<style scoped></style>