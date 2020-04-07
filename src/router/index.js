import Vue from 'vue'
import VueRouter from 'vue-router'
import BuyAndSell from '../views/BuyAndSell.vue'
import i18n from '@/i18n'

Vue.use(VueRouter)

const blog = i18n.messages
const articles = Object.keys(blog).map(section => {
  const children = blog[section].Articles.map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../assets/articles/${child.id}.md`),
    meta: {
      title: child.title,
      metaTags: [
        {
          name: 'description',
          content: child.description
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: `https://daix.co/articles/${child.id}`
        },
        {
          property: 'og:title',
          content: child.title
        },
        {
          property: 'og:description',
          content: child.description
        },
        {
          property: 'og:image',
          content: child.img
        },
        {
          property: 'twitter:url',
          content: `https://daix.co/articles/${child.id}`
        },
        {
          property: 'twitter:title',
          content: child.title
        },
        {
          property: 'twitter:description',
          content: child.description
        },
        {
          property: 'twitter:image',
          content: child.img
        }
      ]
    }
  }))
  return {
    path: `/:lang/articles`,
    name: `Articles in ${section}`,
    component: () => import('../templates/Article.vue'),
    children
  }
})
const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}/buy-and-sell`
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
        path: 'buy-and-sell',
        name: 'Buy & Sell',
        component: BuyAndSell,
        meta: {
          title: 'DaiX Cambodia | Buy and Sell Bitcoin',
          metaTags: [
            {
              name: 'description',
              content:
                'Buy and Sell Bitcoin in Cambodia with local payment methods ABA, Wing, TrueMoney. Chat with us now on Telegram and Facebook Messenger.'
            },
            {
              property: 'og:type',
              content: 'website'
            },
            {
              property: 'og:url',
              content: `https://daix.co/${i18n.locale}/buy-and-sell`
            },
            {
              property: 'og:title',
              content: 'DaiX Cambodia | Buy and Sell Bitcoin'
            },
            {
              property: 'og:description',
              content:
                'Buy and Sell Bitcoin in Cambodia with local payment methods ABA, Wing, TrueMoney. Chat with us now on Telegram and Facebook Messenger.'
            },
            {
              property: 'og:image',
              content: 'https://i.ibb.co/bdXdpCd/image.png'
            },
            {
              property: 'twitter:url',
              content: `https://daix.co/${i18n.locale}/buy-and-sell`
            },
            {
              property: 'twitter:title',
              content: 'DaiX Cambodia | Buy and Sell Bitcoin'
            },
            {
              property: 'twitter:description',
              content:
                'Buy and Sell Bitcoin in Cambodia with local payment methods ABA, Wing, TrueMoney. Chat with us now on Telegram and Facebook Messenger.'
            },
            {
              property: 'twitter:image',
              content: 'https://i.ibb.co/bdXdpCd/image.png'
            }
          ]
        }
      },
      {
        path: 'swap',
        name: 'Swap',
        component: () =>
          import(/* webpackChunkName: "exchange" */ '../views/Exchange.vue'),
        meta: {
          title: 'DaiX Cambodia | Swap Your Cryptocurrency'
        }
      },
      {
        path: 'orders',
        name: 'My Orders',
        component: () =>
          import(/* webpackChunkName: "orders" */ '../views/Orders.vue'),
        meta: {
          title: 'DaiX Cambodia | View your orders'
        }
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

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]')
  ).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta')

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key])
      })

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '')

      return tag
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  next()
})

export default router
