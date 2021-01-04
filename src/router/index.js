import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Water from '../views/water/Water.vue'
import Air from '../views/air/Air.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/water',
    name: 'Water',
    component: Water
  }, {
    path: '/air',
    name: 'Air',
    component: Air
  }, {
  // catch all 404，使用catchAll去判斷這個網址存不存在
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
