import { createRouter, createWebHistory } from "vue-router";

import Login from '../views/login.vue';
import Home from '../components/Home.vue';
import Navbar from '../components/Navbar.vue';
import Forgotpassword from '../views/Forgotpassword.vue'
const routes = [

    { path: '/Home', name: 'Home', component: Home },
    { path: '', name: 'Login', component: Login },
    { path: '/Navbar', name: 'Navbar', component: Navbar },
    { path: '/Forgotpassword', name: 'Forgotpassword', component: Forgotpassword }




]
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
})
export default router