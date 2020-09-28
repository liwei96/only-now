import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Building from '../views/Building.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/index/1014'
  },
  {
    path: '/index/:id',
    name: 'mindex',
    component: Building
  },
  {
    path: '/rule/:id',
    name: 'rule',
    component: () => import('../views/Rule.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
