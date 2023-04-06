import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import index from '~/pages/index.vue'
import login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'
import Home from '~/pages/home.vue'

const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/home',
        component: Home
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router