import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)


app.directive('color',{
    // 指令所在标签插入到真实DOM中自动执行一次
    mounted(el,binding) {
        console.log(el,binding)
        el.style.color= binding.value
    }, 


    updated(el,binding){
        el.style.color= binding.value        
        console.log('updated')
    }
})

app.mount('#app')
