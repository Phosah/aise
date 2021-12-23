import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Trigle from '../views/Trigle.vue'
import Works from '../views/Works.vue'
import Doorstep from '../views/Doorstep.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/trigle',
        name: 'trigle',
        component: Trigle
    },
    {
        path: '/works',
        name: 'works',
        component: Works
    },
    {
        path: '/doorstep',
        name: 'doorstep',
        component: Doorstep
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router