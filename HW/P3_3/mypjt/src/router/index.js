import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeVue.vue'
// import NoContent from '../views/404Nocontent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/NoColor',
    name: 'NoColor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NoColor.vue')
  },
  {
    path: '/SsafLing',
    name: 'SsafLing',
    component: () => import(/* webpackChunkName: "about" */ '../views/SsafLing.vue')
  },
  {
    path: '/SsafLeaf',
    name: 'SsafLeaf',
    component: () => import(/* webpackChunkName: "about" */ '../views/SsafLeaf.vue')
  },
  {
    path: '/SsafLower',
    name: 'SsafLower',
    component: () => import(/* webpackChunkName: "about" */ '../views/SsafLower.vue')
  },

  //404 no content
  {
    path: '*',
    name: '404NoContent',
    component: () => import(/* webpackChunkName: "about" */ '../views/404Nocontent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
