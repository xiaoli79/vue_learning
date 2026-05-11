<script setup>

    defineProps({
        // 接收父传子的modelValue属性
        modelValue:String
    })

    const emit = defineEmits()
</script>

<template>

    <!-- 原生标签上的$event就是事件对象 -->
    <!-- $event.target: select 原生DOM -->
    <!-- $event.target.value: 选中的option的value -->
    <select
        :value="modelValue"
        @change="emit('update:modelValue',$event.target.value)">
        <option value="111">北京</option>
        <option value="222">上海</option>
        <option value="333">深圳</option>
        <option value="444">杭州</option>
        <option value="555">苏州</option>                                
    </select>

</template>

<style scoped>

</style>