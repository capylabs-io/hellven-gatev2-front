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
      render(c) { return c('router-view') }
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'mode',
        name: 'gamemode',
        component: () => import(/* webpackChunkName: "about" */ '../views/mode/pages/Mode.vue')
      },
      {
        path: 'fighters',
        name: 'fighters',
        component: () => import(/* webpackChunkName: "about" */ '../views/fighters/pages/Fighters.vue')
      },
      {
        path: 'tower',
        name: 'tower',
        component: () => import(/* webpackChunkName: "about" */ '../views/tower/pages/Tower.vue')
      },
      {
        path: 'rune',
        name: 'rune',
        component: () => import(/* webpackChunkName: "about" */ '../views/rune/pages/Rune.vue')
      },
      {
        path: 'booster',
        name: 'booster',
        component: () => import(/* webpackChunkName: "about" */ '../views/booster/pages/Booster.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
