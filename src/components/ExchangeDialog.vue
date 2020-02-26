<template>
  <div>
    <v-dialog v-model="show" hide-overlay transition="dialog-bottom-transition">
      <v-card
        class="mx-auto background"
        style="border-radius:25px; position: absolute; bottom: 0;"
        width="100vw"
        height="95%"
      >
        <v-card-title
          v-if="destinationCoin.amount"
          class="px-4 py-3 d-flex secondary"
          style="white-space: nowrap"
        >
          <div class="d-flex justify-space-between" style="width:100%">
            <div class="font-weight-light title">
              {{ this.depositCoin.amount }}
              {{ this.depositCoin.selected.symbol.toUpperCase() }}
              <v-icon class="mx-2">mdi-arrow-right</v-icon>
              ≈
              {{ this.destinationCoin.amount }}
              {{ this.destinationCoin.selected.symbol.toUpperCase() }}
            </div>
            <div>
              <v-btn icon @click.stop="show = false">
                <v-icon top>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
        </v-card-title>
        <DialogStepOne
          :depositCoin="depositCoin"
          :destinationCoin="destinationCoin"
          :orderDetails="orderDetails"
          @exchange="$emit('exchange')"
        />
        <DialogStepTwo
          :depositCoin="depositCoin"
          :destinationCoin="destinationCoin"
          :orderDetails="orderDetails"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import DialogStepOne from './DialogStepOne'
import DialogStepTwo from './DialogStepTwo'

export default {
  components: {
    DialogStepOne,
    DialogStepTwo
  },
  props: {
    value: Boolean,
    depositCoin: Object,
    destinationCoin: Object,
    orderDetails: Object
  },
  data() {
    return {}
  },
  methods: {
    openPage(url) {
      window.open(url, '_blank')
    },
    cancelOrder() {
      this.orderDetails.confirmed = false
      this.orderDetails.destinationAddress = ''
      this.orderDetails.exchangeAddress = ''
    }
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
