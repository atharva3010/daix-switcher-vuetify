<template>
  <v-card-text
    id="step-one"
    style="height:85%;"
    v-if="!this.orderDetails.orderId"
  >
    <div class="d-flex flex-column px-md-3" style="height:100%">
      <!-- TODO: fix form validation for address -->
      <div class="mb-auto mt-6">
        <v-text-field
          v-model="orderDetails.destinationAddress"
          :label="`Enter ${this.destinationCoin.selected.name} Address`"
          class="pt-6"
          required
        />
      </div>

      <div>
        <v-checkbox v-model="orderDetails.terms" color="success">
          <template v-slot:label>
            <div>
              Do you accept the
              <a href="javascript:" @click.stop="openPage(termsPath)">terms</a>?
            </div>
          </template>
        </v-checkbox>
        <v-btn
          :disabled="!orderDetails.terms || !orderDetails.destinationAddress"
          :loading="orderDetails.loading"
          color="primary"
          class="my-4 px-5"
          height="45px"
          width="100%"
          depressed
          @click="$emit('exchange')"
        >
          Exchange
        </v-btn>
      </div>
    </div>
  </v-card-text>
</template>

<script>
export default {
  props: {
    depositCoin: Object,
    destinationCoin: Object,
    orderDetails: Object
  },
  data() {
    return {
      termsPath: 'https://daix.co/terms.html'
    }
  },
  methods: {
    openPage(url) {
      window.open(url, '_blank', 'noopener')
    }
  }
}
</script>
