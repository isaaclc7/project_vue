import Vue from 'vue'
import VueRouter from 'vue-router'

import * as names from './names'

import Personnage from '../views/Personnage'
import Personnages from '../views/Personnages'
import Episode from '../views/Episode'
import Episodes from '../views/Episodes'
import ErrorPage from '../views/ErrorPage'

Vue.use(VueRouter)

const routes = [
    { path: '/error', name: names.ERROR ,component: ErrorPage },
    { path: '/personnages', name: names.PERSONNAGES ,component: Personnages },
    { path: '/personnage/:id', name: names.PERSONNAGE, component: Personnage },
    { path: '/episodes', name: names.EPISODES ,component: Episodes },
    { path: '/episode/:id', name: names.EPISODE, component: Episode },
  ]


const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  router.beforeEach((to, from, next) => {
    console.log('from' ,from)
    console.log('to', to)
    next()
  })
  
  export default router