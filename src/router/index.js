import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Video from '../views/Video'
import Search from '../views/Search'
import Piclndex from '../views/Piclndex'
import VideoClass from '../views/VideoClass'
import PictureClass from '../views/PictureClass'
import Detail from '../views/Detail'
import Login from '../views/Login'
import Register from '../views/Register'
import Forget from '../views/Forget'
import User from '../views/User'
import Taobao from '../views/Taobao'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/video', component: Video },
    { path: '/search', component: Search },
    { path: '/piclndex', component: Piclndex },
    { path: '/video-class', component: VideoClass },
    { path: '/picture-class', component: PictureClass },
    { path: '/detail', component: Detail },
    { path: '/taobao', component: Taobao },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forget', component: Forget },
    { path: '/user', component: User },
    { path: '/', redirect: '/home' }
  ]
})

export default router
