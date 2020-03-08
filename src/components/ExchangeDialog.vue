<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      width="800px"
      transition="dialog-bottom-transition"
      :fullscreen="$vuetify.breakpoint.xsOnly"
    >
      <v-card class="mx-auto background" height="620px">
        <v-card-title
          v-if="destinationCoin.amount"
          class="px-4 py-3 mb-5 d-flex secondary"
          style="white-space: nowrap;"
        >
          <div
            class="d-flex justify-space-between"
            height="10%"
            style="width:100%"
          >
            <div
              class="pa-1 font-weight-bold"
              :class="[$vuetify.breakpoint.smAndUp ? 'title' : 'subtitle-1']"
            >
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
  </v-row>
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
