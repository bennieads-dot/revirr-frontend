import { createRouter, createWebHistory } from 'vue-router'
import UnderConstruction from './pages/UnderConstruction.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },  
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: UnderConstruction
    },
    {
      path: '/',
      component: UnderConstruction
    }
  ]
})

export default router
