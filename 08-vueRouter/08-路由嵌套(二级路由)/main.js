import { createApp } from 'vue'
import App from './App.vue'



//导入router实例
import router from './router/index.js'

const app = createApp(App)


//4.注册路由实例:让路由表规则生效
app.use(router)
app.mount('#app')






