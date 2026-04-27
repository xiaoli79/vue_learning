<script setup>
import { onMounted,onUnmounted } from 'vue';


const timer = setInterval(() =>{
    console.log('Hello World')
},1000)


onMounted(()=>{
    console.log(document.querySelector('p'))
    document.querySelector('p').style.color = 'green'     
})


onUnmounted(()=>{
    clearInterval(timer)
})


</script>
 

<!-- 选项式API -->
<script>

export default{

    data(){
        return{
            count: 0
        }
    },
    methods:{
        fn(){
            console.log('fn函数执行了')
        }
    },

    setup(){
        console.log('0-setup')
    },

    //创建阶段(第一阶段)
    //创建前
    beforeCreate(){
        console.log('1-beforeCreate')
        console.log(this.count) //undifined
        console.log(this.fn) // undifined

    },
    //创建后
    created(){
        console.log('2-created')
        console.log(this.count) //可以访问到
        console.log(this.fn) //可以访问到

        //在给当前组件实例新增了一个timerId属性,保存了当时定时器的Id值,开启了定时器
        this.timerId = setInterval(()=>{
            console.log(this.count)
        },1000)
    },
    //挂载前,此时写在template下的标签还没有变成真实DOM，故而无法获取DOM
    beforeMount(){
        console.log('3-beforeMount')
        console.log(document.querySelector('p')) //null

    },
    //挂载后，此时写在template下的标签已经变成真实DOM，故而可以获取DOM，进而操纵DOM(最早可以操纵DOM的时机)
    mounted(){
        console.log('4-mounted')
        console.log(document.querySelector('p'))   // <p>0</p>
        // 控制DOM样式
        // document.querySelector('p').style.color='red'
    },

    //更新阶段(第三阶段)
    //更新前
    beforeUpdate(){
        console.log('5-beforeUpdate')
        //DOM
        console.log(document.querySelector('p').innerText) //拿取的是旧内容
        // console.log(this.count)

    },

    //更新后
    updated(){
        console.log('6-updated')
        //DOM
        console.log(document.querySelector('p').innerText) //拿取的是新内容,也就是更新后的
        // console.log(this.count)
    },

    //卸载阶段(第四阶段): 组件移除阶段,
    //销毁前
    beforeUnmount(){
        console.log('7-beforeUnmount')
    },

    //销毁后
    unmounted(){
        console.log('8-unmounted')

        //关闭定时器
        clearInterval(this.timerId)
    }
}

</script>

<template>
    <div>
        <p>{{ count }}</p>
        <button @click="count++">+1</button>
    </div>
</template>


<style scope>

</style>