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
        secondary: '#c25bd4',
        accent: colors.shades.white,
        background: colors.grey.darken3,
        bgsecondary: '#4f4f4f',
        success: colors.lightGreen.accent3
      },
      light: {
        primary: colors.purple.accent2,
        secondary: colors.purple.accent1,
        background: colors.shades.white,
        bgsecondary: '#f2f2f2',
        success: colors.lightGreen.accent4
      }
    }
  }
})

// TODO figure out the light and dark color themes
