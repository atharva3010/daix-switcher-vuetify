<template>
  <v-alert
    v-if="badAmount.state || pairOffline.state"
    class="mt-4 text-center"
    color="red accent-2"
    >{{ pairOffline.msg ? pairOffline.msg : badAmount.msg }}</v-alert
  >
</template>

<script>
export default {
  props: {
    badAmount: Object,
    pairOffline: Object
  }
}
</script>
