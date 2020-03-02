<template>
  <a href="javascript:" @click.stop="openTelegram()">
    <div class="telegram-button">
      <v-icon
        :x-large="$vuetify.breakpoint.smAndUp"
        :large="$vuetify.breakpoint.xsOnly"
        color="white"
      >
        mdi-telegram
      </v-icon>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Telegram',
  methods: {
    openTelegram() {
      window.open('https://t.me/daixco', '_blank')
    }
  }
}
</script>

<style scoped>
.telegram-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #0088cc;
  padding: 9px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
