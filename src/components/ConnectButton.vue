<template>
  <div class="pb-6 d-flex flex-column flex-sm-row">
    <v-btn
      class="mb-6 mr-sm-6"
      rounded
      :color="facebook.color"
      x-large="$vuetify.breakpoint.smAndUp"
      @click="startMessage(facebook.link)"
    >
      <v-icon large left class="mr-5">{{ facebook.icon }}</v-icon>
      Message us on Facebook
    </v-btn>
    <v-btn
      class="mb-6"
      rounded
      :color="telegram.color"
      x-large="$vuetify.breakpoint.smAndUp"
      @click="startMessage(telegram.link)"
    >
      <v-icon large left class="mr-5">{{ telegram.icon }}</v-icon>
      Message us on Telegram
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      facebook: {
        link: 'https://m.me/daixcambodia',
        icon: 'mdi-facebook-messenger',
        color: '#0084ff'
      },
      telegram: {
        link: 'https://t.me/daixco',
        icon: 'mdi-telegram',
        color: '#0088cc'
      }
    }
  },
  methods: {
    startMessage(link) {
      window.open(link, '_blank')
    }
  }
}
</script>
