<template>
  <div class="">
    <v-btn
      class="mb-6 mr-sm-6"
      rounded
      :color="this.color"
      large
      @click="startMessage()"
    >
      <img width="25px" class="mr-3" :src="getIcon()" />
      <span style="color:white"
        >{{ $t('Content.ConnectButton.trade-us') }} {{ this.name }}</span
      >
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ExchangesButton',
  props: {
    name: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    color: {
      type: String,
      default: 'orange'
    }
  },
  methods: {
    startMessage() {
      window.open(this.link, '_blank', 'noopener')
    },
    getIcon() {
      if (this.name === 'LocalBitcoins') {
        return require('@/assets/lbc.png')
      }
      if (this.name === 'LocalCryptos') {
        return require('@/assets/lct.png')
      }
    }
  }
}
</script>
