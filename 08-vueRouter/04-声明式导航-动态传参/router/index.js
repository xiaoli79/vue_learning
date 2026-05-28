import { createRouter,createWebHashHistory } from 'vue-router'


//../表示返回上一级目录，来找下面的文件
// import Find from '../views/Find.vue'
// import My from '../views/My.vue'
// import Friend from '../views/Friend.vue'

// @ 表示 : src的绝对路径
import Find from '../views/Find.vue'
import My from '../views/My.vue'
import Friend from '../views/Friend.vue'


//下包: npm i vue-router
//导入2个相关函数
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
            name: 'Friend',
            path: '/friend/:fid',
            component: Friend
        }
    ]
})

//默认导出router实例
export default router