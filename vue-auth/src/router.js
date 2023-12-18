import Vue from 'vue'
import Router from 'vue-router'

import HomeMain from './components/HomeMain.vue'
import LoginMain from './components/LoginMain.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: HomeMain },
        { path: '/login', component: LoginMain }
    ]
    })
