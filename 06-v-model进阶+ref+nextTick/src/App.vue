<script setup>
    import { nextTick, ref } from 'vue';
    const count = ref(0)
    const btnRef = ref(null)

    const increment = async() =>{
        count.value++;

        //问题：当count边了，但1获取到的button的内容并不是同步的
        //原因：在vue中，数据边了，DOM的更新是异步的、批量的
        //解决方案：在nextTick（）时机获取更新的后DOM
        //nextTick（）使用方式有2种：
        // 1）一种是借助await+async等待nextTick（）执行结束
        // 2）另一种给nextTick(())=>{}) 传入回调函数，在回调中获取更新的后的DOM
        //获取button的内容
        await nextTick()
        // 获取button内容
        console.log(btnRef.value.textContent)


        // nextTick(() =>{
        //     console.log(btnRef.value.textContent)
        // })
    }
</script>

<template>
    <div>
        <button @click="increment" ref="btnRef">{{ count }}</button>
    </div>
</template>


<style scoped></style>