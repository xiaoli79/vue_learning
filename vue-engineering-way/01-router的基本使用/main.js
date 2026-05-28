import { createApp } from 'vue'
import App from './App.vue'

//下包: npm i vue-router
//导入2个相关函数
import { createRouter,createWebHashHistory } from 'vue-router'
import Find from './views/Find.vue'
import My from './views/My.vue'
import Friend from './views/Friend.vue'



// 创建路由实例
const router = createRouter({

    //指明路由模式: 当前创建时哈希模式，路径后面会带#
    history: createWebHashHistory(),


    //路由表规则
    routes: [
        {
            path: '/find',
            component: Find
        },
        {
            path: '/my',
            component: My
        },
        {
            path: '/friend',
            component: Friend
        }
    ]
})



const app = createApp(App)


//4.注册路由实例:让路由表规则生效
app.use(router)
app.mount('#app')






