import { createApp } from 'vue'
import App from './App.vue'


// 导包
import { createPinia } from 'pinia'

// 创建
const pinia = createPinia()
const app = createApp(App)

//使用
app.use(pinia)
app.mount('#app')
