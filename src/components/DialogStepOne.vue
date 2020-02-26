<template>
  <!-- TODO: add arrow icon pointing right -->

  <v-card-text
    id="step-one"
    v-if="orderDetails.confirmed === false"
    style="height:90%"
  >
    <div class="font-weight-light d-flex flex-column" style="height:100%">
      <!-- TODO: fix form validation for address -->
      <div class="mb-auto mt-6">
        <v-text-field
          v-model="orderDetails.destinationAddress"
          :label="`Enter ${this.destinationCoin.selected.name} Address`"
          color="secondary"
          class="pt-6"
          required
        ></v-text-field>
      </div>

      <div>
        <v-checkbox v-model="terms" color="green">
          <template v-slot:label>
            <div>
              Do you accept the
              <a href="javascript:" @click.stop="openPage(termsPath)">terms</a>
              and
              <a href="javascript:" @click.stop="openPage(conditionsPath)"
                >conditions</a
              >?
            </div>
          </template>
        </v-checkbox>
        <v-btn
          :disabled="!terms || !orderDetails.destinationAddress"
          :loading="orderDetails.loading"
          color="primary"
          class="mt-4 px-5"
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
      terms: false,
      termsPath: 'https//google.com',
      conditionsPath: 'https//google.com/hi'
    }
  },
  methods: {
    openPage(url) {
      window.open(url, '_blank')
    }
  }
}
</script>
