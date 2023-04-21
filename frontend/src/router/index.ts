import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/Blog/Blog.vue')
  },
  {
    path: '/blog/archive',
    name: 'archive',
    component: () => import('../views/Blog/Archive.vue')
  },
  {
    path: '/blog/recommendation',
    name: 'recommendation',
    component: () => import('../views/Blog/Recommendation.vue')
  },
  {
    path: '/blog/about',
    name: 'about',
    component: () => import('../views/Blog/About.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/Tools/ResumePrettier.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
