<script setup>
    import { onMounted, ref } from 'vue';
    import MyForm from './components/MyForm.vue';

    const formRef = ref(null)
    onMounted(()=>{
        console.log(formRef.value.validate())
    })

    const onLogin = () =>{
        if(formRef.value.validate()){
            console.log('ok!')
        }else{
            console.log('不 ok!')
        }
    }
</script>

<template>

    <div class="login-box">
        <!-- ref获取组件实例 -->
        <MyForm ref="formRef"/>
        <button @click="onLogin">登录</button>
    </div>
    
</template>

<style scoped>


</style>