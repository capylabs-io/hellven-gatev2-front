import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../views/home/pages/Home.vue'
import i18n from '@/i18n';
Vue.use(VueRouter)
Vue.use(VueMeta)
const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      // {
      //   path: 'about',
      //   name: 'about',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      // },
      {
        path: 'sign-in',
        name: 'Signin',
        component: () => import('../views/user/pages/Sign-in.vue')
      },
      {
        path: 'forget-password',
        name: 'ForgetPassword',
        component: () => import('../views/user/pages/Forget-password.vue')
      },
      {
        path: 'reset-password/code=:code',
        name: 'ResetPassword',
        component: () => import('../views/user/pages/Reset-password.vue')
      },
      {
        path: 'sign-up',
        name: 'Signup',
        component: () => import('../views/user/pages/Sign-up.vue')
      },
      {
        path: 'account',
        name: 'AccountSettings',
        component: () => import('../views/user/pages/Account-Settings.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
