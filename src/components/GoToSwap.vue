<template>
  <div class="pb-6 d-flex flex-column flex-sm-row">
    <v-btn
      class="mb-6 mr-sm-6"
      rounded
      color="primary"
      large
      :to="'/' + $i18n.locale + '/swap'"
    >
      <v-icon color="white" left class="mr-3">mdi-swap-vertical-bold</v-icon>
      <span style="color:white">Checkout DAIX Swap</span>
    </v-btn>
  </div>
</template>

<script>
export default {}
</script>
