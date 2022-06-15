import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/member/Layout.vue')
const Home = () => import('@/views/home/index.vue')
const TopCategory = () => import('@/views/category/index.vue')
const SubCategory = () => import('@/views/category/sub.vue')
const Goods = () => import('@/views/goods/index.vue')
//路由规则
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/category/:id', component: TopCategory },
      { path: '/category/sub/:id', component: SubCategory },
      { path: '/product/:id', component: Goods }
    ]
  }
]
//创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  //每次切换路由的时候滚动到页面顶部
  scrollBehavior () {
    return { left :0, top : 0}
  }
})

export default router
