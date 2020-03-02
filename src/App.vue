<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <NavBar />
    <v-content>
      <router-view />
    </v-content>
    <Telegram />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Telegram from '@/components/Telegram'

export default {
  name: 'App',

  components: {
    NavBar,
    Telegram
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  }
}
</script>
