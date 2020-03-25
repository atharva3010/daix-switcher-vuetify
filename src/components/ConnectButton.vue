<template>
  <div class="">
    <v-btn
      class="mb-6"
      rounded
      :color="this.color"
      large
      @click="startMessage()"
    >
      <v-icon color="white" large left class="mr-5">{{ this.icon }}</v-icon>
      <span style="color:white">
        {{ $t('Content.ConnectButton.message-us') }} {{ this.name }}</span
      >
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ConnectButton',
  props: {
    name: String,
    link: String,
    icon: String,
    color: String
  },
  methods: {
    startMessage() {
      window.open(this.link, '_blank', 'noopener')
    }
  }
}
</script>
