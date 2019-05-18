

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


let Myheader =Vue.component('Myheader', require('./components/Myheader.vue').default);
let Myfooter =Vue.component('Myfooter', require('./components/Myfooter.vue').default);



let Home =Vue.component('Home', require('./components/Home.vue').default);
let About =Vue.component('About', require('./components/About.vue').default);



const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About }
  ]


  const router = new VueRouter({
    // mode: 'history',

    routes // short for `routes: routes`
  })

const app = new Vue({
    el: '#app',
    router,
    components: {Myheader,Myfooter}
});
