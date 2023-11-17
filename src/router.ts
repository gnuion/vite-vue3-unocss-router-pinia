import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/NotFound.vue';
import HomePage from '@/views/HomePage.vue';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // { path: '/', meta: { layout: Blank, title: 'Home - Sleuth UI' }, component: Home },
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }
    ],
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})