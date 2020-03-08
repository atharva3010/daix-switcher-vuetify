import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import i18n from './i18n'
import VueMeta from 'vue-meta'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-142584982-3'
})

Vue.component(VueQrcode.name, VueQrcode)

Vue.config.productionTip = false

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  VueMeta,
  render: h => h(App)
}).$mount('#app')
