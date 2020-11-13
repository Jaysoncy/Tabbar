import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载
const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')
const Class = () => import('../views/class/Class')
const Shopcart = () => import('../views/shopcart/Shopcart')
//1.安装插件
Vue.use(VueRouter)
//2.创建路由对象
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/class',
        component: Class
    },
    {
        path: '/shopcart',
        component: Shopcart
    },
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
//3.导出router
export default router