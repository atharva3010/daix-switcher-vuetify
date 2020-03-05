import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    welcomeMsg: 'Welcome to Your Vue.js App'
  },
  es: {
    welcomeMsg: 'What ever this lang sucks!'
  }
}

/* eslint-disable no-unused-vars */

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'kh', // set fallback locale
  messages // set locale messages
})

/* eslint-enable no-unused-vars */
