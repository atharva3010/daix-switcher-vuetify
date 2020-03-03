import Vue from 'vue'
import VueRouter from 'vue-router'
import BuyAndSell from '../views/BuyAndSell.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Buy-sell',
    component: BuyAndSell
  },
  {
    path: '/swap',
    name: 'Exchange',
    component: () =>
      import(/* webpackChunkName: "exchange" */ '../views/Exchange.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/orders',
    name: 'My Orders',
    component: () =>
      import(/* webpackChunkName: "orders" */ '../views/Orders.vue')
  },
  // Articles
  {
    path: '/posts',
    name: 'Posts',
    component: () =>
      import(/* webpackChunkName: "posts" */ '../views/PostTemplate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
