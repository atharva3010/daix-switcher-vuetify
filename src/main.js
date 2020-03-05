import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import i18n from '@/plugins/i18n'

Vue.component(VueQrcode.name, VueQrcode)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
