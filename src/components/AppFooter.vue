<template>
  <v-footer padless>
    <v-card flat tile class="text-center" width="100%" color="bgsecondary">
      <v-divider></v-divider>
      <v-card-text>
        <v-btn
          @click="openSocial(icon)"
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pa-0 font-weight-light overline">
        {{ new Date().getFullYear() }} — DAIX Cambodia
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-telegram'],
      links: {
        facebook: 'https://www.facebook.com/daixcambodia',
        telegram: 'https://t.me/daixco',
        twitter: 'https://twitter.com/DAIXCambodia'
      }
    }
  },
  methods: {
    openSocial(icon) {
      if (icon === 'mdi-facebook') {
        this.openLink(this.links.facebook)
      } else if (icon === 'mdi-telegram') {
        this.openLink(this.links.telegram)
      } else {
        this.openLink(this.links.twitter)
      }
    },
    openLink(link) {
      window.open(link, '_blank')
    }
  }
}
</script>
