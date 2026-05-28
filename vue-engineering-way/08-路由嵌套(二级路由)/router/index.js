import { createRouter, createWebHistory } from 'vue-router'

import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'
import _404 from '@/views/404.vue'
import Recommend from '@/views/Recommend.vue'
import TopList from '@/views/TopList.vue'
import PlayList from '@/views/PlayList.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/find'
        },
        {
            path: '/find',
            component: Find,
            children: [
                {
                    path: '',
                    redirect: '/find/recommend'
                },
                {
                    path: 'recommend',
                    component: Recommend
                },
                {
                    path: 'topList',
                    component: TopList
                },
                {
                    path: 'playList',
                    component: PlayList
                }
            ]
        },
        {
            path: '/my',
            component: My
        },
        {
            path: '/friend/:id',
            name: 'Friend',
            component: Friend
        },
        {
            path: '/:pathMatch(.*)*',
            component: _404
        }
    ]
})

export default router
