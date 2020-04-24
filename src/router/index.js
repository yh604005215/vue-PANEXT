import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')
const VideoInfo = () => import('../views/Video/VideoInio')
const Search = () => import('../views/Search')
const Piclndex = () => import('../views/Piclndex')
const VideoClass = () => import('../views/VideoClass')
const PictureClass = () => import('../views/PictureClass')
const Detail = () => import('../views/Detail')
const Login = () => import('../views/Login')
const Register = () => import('../views/Register')
const Forget = () => import('../views/Forget')
const User = () => import('../views/User')
const Taobao = () => import('../views/Taobao')
const Collection = () => import('../views/Video/Collection')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/video/videoinfo', component: VideoInfo },
    { path: '/search', component: Search },
    { path: '/piclndex', component: Piclndex },
    { path: '/video-class', component: VideoClass },
    { path: '/picture-class', component: PictureClass },
    { path: '/atlas/detail', component: Detail },
    { path: '/taobao', component: Taobao },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forget', component: Forget },
    { path: '/user', component: User },
    { path: '/video/collection', component: Collection },
    { path: '/', redirect: '/home' }
  ]
})

export default router
