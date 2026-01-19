import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'

const routes = [
 {
    path: '/',
    redirect: '/login' // 👈 resolve o warning
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
