import { createRouter,createWebHashHistory ,createWebHistory} from 'vue-router'


//../表示返回上一级目录，来找下面的文件
// import Find from '../views/Find.vue'
// import My from '../views/My.vue'
// import Friend from '../views/Friend.vue'

// @ 表示 : src的绝对路径
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'
import _404 from '@/views/404.vue'


//下包: npm i vue-router
//导入2个相关函数
// 创建路由实例
const router = createRouter({

    //指明路由模式: 当前创建时哈希模式，路径后面会带#
    // history: createWebHashHistory(), // 创建的哈希模式
    history: createWebHistory() ,  //创建历史模式  路径不用带# 


    //路由表规则
    routes: [
        //重定向
        {//默认打开页面，会访问/根路径,这里借助redirect让其强制跳转到/find，也就是find页面

            path:'/',
            redirect: '/find'
        },
        {
            path: '/find',
            component: Find,
        },
        {
            path: '/my',
            component: My
        },
        {
            path: '/friend/',
            component: Friend
        },
        {
            //配置404页面的规则
            path: '/:pathMatch(.*)*',
            component: _404
        }
    ]
})

//默认导出router实例
export default router