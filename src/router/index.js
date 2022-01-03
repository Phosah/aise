import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Trigle from '../views/Trigle.vue'
// import Works from '../views/Works.vue'
import Doorstep from '../views/Doorstep.vue'
import Test from '../views/Test.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/trigle',
        name: 'trigle',
        component: Trigle
    },
    // {
    //     path: '/works',
    //     name: 'works',
    //     component: Works
    // },
    {
        path: '/doorstep',
        name: 'doorstep',
        component: Doorstep
    },
    {
        path: '/test',
        name: 'test',
        component: Test
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router