import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'index',
    component: IndexView,
  },
  {
    path: '/:id',
    name: 'DetailView',
    component: () => import('../views/DetailView.vue')
  },
  {
    path: '/create',
    name: 'CreateView',
    component: () => import('../views/CreateView.vue')
  }
  // {
  //   path: '/',/
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router