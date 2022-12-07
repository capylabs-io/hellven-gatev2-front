import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../views/home/pages/Home.vue'
// import i18n from '@/i18n';
Vue.use(VueRouter)
Vue.use(VueMeta)
const routes = [
  // {
  //   path: '/',
  //   redirect: `/${i18n.locale}`
  // },
  {
    // path: '/:lang', 
    path: '/', // todo: remove url #
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
        name: 'towers',
        component: () => import(/* webpackChunkName: "about" */ '../views/tower/pages/Tower.vue')
      },
      {
        path: 'rune',
        name: 'runes',
        component: () => import(/* webpackChunkName: "about" */ '../views/rune/pages/Rune.vue')
      },
      {
        path: 'spell',
        name: 'spell',
        component: () => import(/* webpackChunkName: "about" */ '../views/spell/pages/Spell.vue')
      },
      {
        path: 'booster',
        name: 'boosters',
        component: () => import(/* webpackChunkName: "about" */ '../views/booster/pages/Boosterv2.vue')
      },
      {
        path: 'comingsoon',
        name: 'comingsoon',
        component: () => import(/* webpackChunkName: "about" */ '../views/ComingSoon.vue')
      },
      {
        path: '404',
        name: '404',
        component: () => import(/* webpackChunkName: "about" */ '../views/PageNotFound.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history', routes
})

export default router
