import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    dark: true,
    themes: {
      dark: {
        primary: colors.purple.accent2,
        secondary: colors.purple.accent1,
        accent: colors.shades.white,
        background: colors.grey.darken3,
        'background-secondary': colors.grey.darken3
      },
      light: {
        primary: colors.blue,
        secondary: colors.blue.darken1,
        background: colors.shades.white
      }
    }
  }
})

// TODO figure out the light and dark color themes
