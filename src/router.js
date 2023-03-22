import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import SignIn from './pages/SignIn.vue'
import PostAJob from './pages/PostAJob.vue'
import JobPost from './pages/JobPost.vue'
import Jobs from './pages/Jobs.vue'

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
      component: Home
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/post-a-job',
      component: PostAJob
    },
    {
      path: '/job-post',
      component: JobPost
    },
    {
      path: '/jobs',
      component: Jobs
    }
  ]
})
export default router
