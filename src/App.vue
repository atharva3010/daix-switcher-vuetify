<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <NavBar />
    <v-content>
      <router-view />
    </v-content>
    <!-- <Telegram /> -->
    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'DAIX Cambodia',
    // all titles will be injected into this template
    titleTemplate: '%s | Buy & Sell Bitcoin'
  },
  components: {
    NavBar,
    AppFooter
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  }
}
</script>
