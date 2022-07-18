
import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComp from './components/pages/HomeComp';
import ProductsComp from './components/pages/ProductsComp';
import AboutComp from './components/pages/AboutComp';
import ContactsComp from './components/pages/ContactsComp';


const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes:
    [
        {
            path: '/',
            name: 'home',
            component : HomeComp
        },
        {
            path: '/pizze',
            name: 'pizzas',
            component : ProductsComp
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component : AboutComp
        },
        {
            path: '/contatti',
            name: 'contacts',
            component : ContactsComp
        }
    ]
})

export default router;
