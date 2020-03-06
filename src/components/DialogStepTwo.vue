<template>
  <v-card-text
    v-if="this.orderDetails.orderId"
    class="text-center"
    style="height:80%"
  >
    <div class="headline mb-3">
      <span>Send</span>
      <span class="success--text">
        {{ depositCoin.amount }}
        {{ depositCoin.selected.symbol.toUpperCase() }}
      </span>
    </div>
    <p class="mb-0">
      Copy and paste the address, or scan the QR code from your
      {{ depositCoin.selected.symbol.toUpperCase() }} wallet
    </p>
    <div>
      <v-chip class="my-2 mb-6">
        <v-progress-circular
          indeterminate
          color="primary"
          width="2"
          size="17"
          class="mr-1"
          v-if="iconStatus() === 'loading'"
        />
        <v-icon color="success" class="mr-1" v-if="iconStatus() === 'complete'">
          mdi-check-circle-outline
        </v-icon>
        <v-icon color="red" class="mr-1" v-if="iconStatus() === 'timeout'">
          mdi-close-circle-outline
        </v-icon>
        {{ orderStatus().toUpperCase() }}
      </v-chip>
    </div>
    <qrcode
      :value="orderDetails.exchangeAddress"
      :options="{ margin: 1, scale: 5 }"
    />
    <div class="mx-auto mt-3" style="max-width:500px">
      <CopyField
        :id="'1'"
        :orderDetails="orderDetails"
        :vmodel="orderDetails.exchangeAddress"
        :filled="true"
        :dense="true"
        class="mb-4"
      />
      <CopyField
        :id="'2'"
        :orderDetails="orderDetails"
        :vmodel="orderDetails.destinationAddress"
        :label="'RECIPIENT ADDRESS'"
      />
      <CopyField
        :id="'3'"
        :orderDetails="orderDetails"
        :vmodel="orderDetails.orderId"
        :label="'ORDER ID'"
      />
    </div>
  </v-card-text>
</template>

<script>
import CopyField from './CopyField'

export default {
  components: {
    CopyField
  },
  props: {
    depositCoin: Object,
    destinationCoin: Object,
    orderDetails: Object
  },
  methods: {
    orderStatus() {
      if (this.orderDetails.status === 'no_deposit') {
        return 'Awaiting Deposit'
      }
      if (this.orderDetails.status === 'timeout') {
        return 'Canceled'
      } else {
        return this.orderDetails.status.replace(/^\w/, c => c.toUpperCase())
      }
    },
    iconStatus() {
      let status = this.orderDetails.status
      if (
        status === 'no_deposit' ||
        status === 'confirming' ||
        status === 'exchanging' ||
        status === 'sending'
      ) {
        return 'loading'
      }
      if (status === 'complete') {
        return 'complete'
      }
      if (status === 'timeout' || status === 'failed') {
        return 'timeout'
      } else {
        return false
      }
    }
  }
}
</script>
