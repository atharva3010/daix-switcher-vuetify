import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#5E35B1',
        secondary: '#B388FF'
      }
    }
  }
})

// TODO figure out the light and dark color themes
