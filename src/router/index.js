import { createRouter, createWebHistory } from "vue-router";

import DashboardView from '../views/DashboardView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/dashboard',
            component: DashboardView,
        }
    ]
})

export default router;