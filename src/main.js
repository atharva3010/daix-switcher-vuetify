import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import i18n from './i18n'
import Meta from 'vue-meta'

Vue.component(VueQrcode.name, VueQrcode)

Vue.use(Meta, {
  refreshOnceOnNavigation: true
})

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
  render: h => h(App)
}).$mount('#app')
