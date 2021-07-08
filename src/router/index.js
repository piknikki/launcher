import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Interview from '../components/Interview'
import Signup from '../views/Signup'
import Login from '../views/Login'
import firebase from 'firebase'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
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
      component: () => import(/* webpackChunkName: "form" */ '../views/InterviewForm.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/interview/:slug',
      name: 'Interview',
      component: Interview,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// route guards
router.beforeEach((to, from, next) => {
  // check if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    const user = firebase.auth().currentUser
    if (user) {
      // user signed in, go to route
      next()
    } else {
      // no user signed in, redirect to login
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
