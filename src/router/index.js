import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta : {
        login: true
      }
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../components/RegistroView.vue'),
    }
  ],
})

router.beforeEach((to, from, next) => {
  const authRequired = to.meta.login
  if (authRequired) {
    next('/about')
    router.push('/')
  }
  else next ()
})
export default router