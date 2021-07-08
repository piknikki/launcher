import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Interview from '../components/Interview'
import Signup from '../views/Signup'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/form',
    name: 'InterviewForm',
    component: () => import(/* webpackChunkName: "form" */ '../views/InterviewForm.vue')
  },
  {
    path: '/interview/:slug',
    name: 'Interview',
    component: Interview
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
