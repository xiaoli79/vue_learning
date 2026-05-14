<script setup>

    //子组件直接通过defineModel()来接收父组件传递的v-model值

    // defineModel()的返回值是一个ref数据，并且可以在子组件中直接操作这个ref数据
    //，并且可以在子组件中直接操作这个ref数据，会引起父组件的数据的同步更新
    const model = defineModel()

</script>

<template>
    <select v-model="model">
        <option value="111">北京</option>
        <option value="222">上海</option>
        <option value="333">深圳</option>
        <option value="444">杭州</option>
        <option value="555">苏州</option>                                
    </select>
</template>

<style scoped>

</style>