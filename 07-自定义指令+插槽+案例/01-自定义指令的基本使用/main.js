import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)


app.directive('jujiao',{
    // 指令所在标签插入到真实DOM中自动执行一次
    mounted(el) {
        // el就是指令所在DOM元素，拿到el即可
        el.focus()  
        console.log('mounted',el)        
    }, 
})

app.mount('#app')
