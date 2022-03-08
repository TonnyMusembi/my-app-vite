import { createRouter, createWebHistory } from "vue-router";

import Login from '../views/login.vue';
import Home from '../components/Home.vue';
//import Navbar from '../components/Navbar.vue';
const routes = [

    { path: '/', name: 'Home', component: Home },
    { path: '', name: 'Login', component: Login },
    //{ path: '/', name: 'Navbar', component: Navbar }
    {}



]
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
})
export default router