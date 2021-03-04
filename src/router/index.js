import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('@/views/home/home')
const classify = () => import('@/views/classify/classify')
const Shopping = () => import('@/views/Shopping/Shopping')
const my = () => import('@/views/my/my')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/classify',
    component: classify
  },
  {
    path: '/Shopping',
    component: Shopping
  },
  {
    path: '/my',
    component: my
  },
]
const router = new VueRouter({
  routes,
  //路径改成history模式
  mode:'history'
})

// 3.导出router
export default router
