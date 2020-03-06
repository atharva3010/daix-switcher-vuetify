import Vue from 'vue'
import VueRouter from 'vue-router'
import BuyAndSell from '../views/BuyAndSell.vue'
import blog from '../assets/articles/articles.json'
import i18n from '@/i18n'

Vue.use(VueRouter)

const articles = Object.keys(blog).map(section => {
  const children = blog[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../assets/articles/${child.id}.md`)
  }))
  return {
    path: `/articles`,
    name: section,
    component: () => import('../templates/Article.vue'),
    children
  }
})

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render(c) {
        return c('router-view')
      }
    },
    children: [
      {
        path: '/',
        name: 'Buy-sell',
        component: BuyAndSell
      },
      {
        path: 'swap',
        name: 'Exchange',
        component: () =>
          import(/* webpackChunkName: "exchange" */ '../views/Exchange.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'orders',
        name: 'My Orders',
        component: () =>
          import(/* webpackChunkName: "orders" */ '../views/Orders.vue')
      },
      ...articles
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
