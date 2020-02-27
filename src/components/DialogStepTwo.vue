<template>
  <v-card-text
    v-if="orderDetails.confirmed"
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
      <v-chip class="my-2">
        <v-progress-circular
          indeterminate
          color="primary"
          width="2"
          size="17"
          class="mr-2"
        />
        {{ this.orderDetails.status }}
      </v-chip>
    </div>
    <qrcode
      :value="orderDetails.exchangeAddress"
      :options="{ margin: 1, scale: 5 }"
    />
    <div class="mx-auto mt-5" style="max-width:500px">
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
  }
}
</script>
