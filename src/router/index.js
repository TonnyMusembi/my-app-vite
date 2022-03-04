import { createRouter, createWebHistory } from "vue-router";

import Login from '../views/login.vue';
//import Home from '../components/Home.vue';

const routes = [

    //{ path: '/', name: 'Home', component: Home },
    { path: '', name: 'Login', component: Login }


]
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
})
export default router