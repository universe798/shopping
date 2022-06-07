import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/member/Layout.vue')
const Home = () => import('@/views/home/index.vue')
const TopCategory = () => import('@/views/category/index.vue')
const SubCategory = () => import('@/views/category/sub.vue')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/category/:id', component: TopCategory },
      { path: '/category/sub/:id', component: SubCategory }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
