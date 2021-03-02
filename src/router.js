import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import ListUsers from "@/views/ListUsers";
import ShowDocument from "@/views/ShowDocument";
import Logon from "@/views/Logon";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/logon',
        name: 'Logon',
        component: Logon
    },
    {
        path: '/users',
        name: 'User',
        component: ListUsers
    },
    {
        path: '/docs/:type/:doc_id?',
        name: 'Docs',
        component: ShowDocument
    },
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
