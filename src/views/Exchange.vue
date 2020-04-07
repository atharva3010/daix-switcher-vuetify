<template>
  <v-container>
    <v-row justify="center">
      <v-col class="px-5" sm="12" md="10" cols="12">
        <div>
          <h1
            class="mb-8 pt-6 font-weight-bold"
            :class="[
              $vuetify.breakpoint.mdAndUp
                ? 'display-3'
                : $vuetify.breakpoint.smAndUp
                ? 'display-2'
                : 'display-1'
            ]"
            style="line-height:1.05"
          >
            Swap Your Cryptocurrency
          </h1>
          <span
            class="mb-4"
            :class="[$vuetify.breakpoint.mdAndUp ? 'headline' : 'title']"
            style="line-height:1.2"
          >
            Trade 300+ coins without ever signing up for an account.
          </span>
        </div>
        <v-card
          color="background"
          class="pt-10 mt-md-10 mt-6 pb-6 d-sm-flex"
          flat
        >
          <ExchangeForm
            v-model.number="depositCoin.amount"
            :coins="coins"
            :exchangeProps="depositCoin"
            @select-coin="
              param1 => {
                this.selectCoin('deposit', param1)
              }
            "
          />

          <div class="text-right mt-5 mb-0 mt-sm-8 my-2 mx-sm-3">
            <v-btn text icon @click="swapCoins">
              <!-- TODO: make swap-vertical icon spi 90 once on click -->
              <v-icon size="30">{{
                $vuetify.breakpoint.smAndUp
                  ? 'mdi-swap-horizontal'
                  : 'mdi-swap-vertical'
              }}</v-icon>
            </v-btn>
          </div>

          <ExchangeForm
            v-model.number="destinationCoin.amount"
            :coins="coins"
            :exchangeProps="destinationCoin"
            @select-coin="
              param1 => {
                this.selectCoin('destination', param1)
              }
            "
          />
        </v-card>
        <div>
          <ExchangeAlert
            :badAmount="error.badAmountErr"
            :pairOffline="error.pairOffline"
          />
        </div>
        <div class="text-center">
          <v-btn
            :disabled="
              error.badAmountErr.state ||
                error.pairOffline.state ||
                !destinationCoin.amount ||
                destinationCoin.loading
            "
            color="primary"
            class="mt-4 px-5 font-weight-bold"
            style="opacity:0.9; letter-spacing: 4px;"
            :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : '']"
            :height="$vuetify.breakpoint.smAndUp ? '45px' : '40px'"
            :width="$vuetify.breakpoint.smAndUp ? '160px' : '120px'"
            @click.stop="resetOrderDetails"
            :loading="destinationCoin.loading"
          >
            <span style="letter-spacing: 1.5px;">Proceed</span>
          </v-btn>
        </div>

        <ExchangeDialog
          v-model="showExchangeDialog"
          :destinationCoin="destinationCoin"
          :depositCoin="depositCoin"
          :orderDetails="orderDetails"
          @exchange="getOrder"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EventService from '../services/EventService'
import ExchangeForm from '../components/ExchangeForm'
import ExchangeDialog from '../components/ExchangeDialog'
import ExchangeAlert from '../components/ExchangeAlert'
import _ from 'lodash'

export default {
  components: {
    ExchangeForm,
    ExchangeDialog,
    ExchangeAlert
  },
  name: 'Exchange',
  data() {
    return {
      showExchangeDialog: false,
      coins: [],
      limit: {},
      depositCoin: {
        name: 'depositCoin',
        selected: {},
        amount: 0.1,
        label: 'Send'
      },
      destinationCoin: {
        name: 'destinationCoin',
        selected: {},
        amount: null,
        label: 'Get',
        disabled: true,
        loading: false
      },
      error: {
        badAmountErr: {
          state: false,
          msg: ''
        },
        pairOffline: {
          state: false,
          msg: ''
        }
      },
      orderDetails: {
        exchangeAddress: '',
        orderId: '',
        loading: false,
        destinationAddress: '',
        status: '',
        rate: 0,
        minerFee: 0,
        terms: false
      }
    }
  },
  methods: {
    track() {
      this.$ga.page('/swap')
    },
    resetOrderDetails() {
      this.orderDetails = {
        exchangeAddress: '',
        orderId: '',
        loading: false,
        destinationAddress: '',
        status: '',
        rate: 0,
        minerFee: 0,
        terms: false
      }
      this.showExchangeDialog = true
    },
    selectCoin(saveToObject, coin) {
      if (saveToObject === 'deposit') {
        this.depositCoin.selected = coin
      } else {
        this.destinationCoin.selected = coin
      }
    },
    selectCoinDesti(coin) {
      this.destinationCoin.selected = coin
    },
    setCoin(coinSymbol, path) {
      // Set default coins on page load
      path.selected = this.coins.find(coin => {
        return coin.symbol === coinSymbol
      })
    },
    calcRate() {
      return (
        this.depositCoin.amount * this.orderDetails.rate -
        this.orderDetails.minerFee
      )
    },
    swapCoins() {
      this.depositCoin.selected = [
        this.destinationCoin.selected,
        (this.destinationCoin.selected = this.depositCoin.selected)
      ][0]
    },
    checkLimit(value, min, max, coin) {
      this.error.badAmountErr.state = false
      this.error.badAmountErr.msg = ''
      if (value < min) {
        this.error.badAmountErr.msg = `Minimum amount is ${min} ${coin.toUpperCase()}`
        this.error.badAmountErr.state = true
      } else if (value > max) {
        this.error.badAmountErr.msg = `Maximum amount is ${max} ${coin.toUpperCase()}`
        this.error.badAmountErr.state = true
      }
    },
    getCoins() {
      EventService.getCoins().then(response => {
        this.coins = Object.freeze(response.data.data)
        if (!localStorage.depositCoin) {
          this.setCoin('btc', this.depositCoin)
        }
        if (!localStorage.destSelected) {
          this.setCoin('neo', this.destinationCoin)
        }
      })
    },
    getRate() {
      this.destinationCoin.loading = true
      EventService.getRate({
        depositCoin: this.depositCoin.selected.symbol,
        destinationCoin: this.destinationCoin.selected.symbol
      }).then(response => {
        this.orderDetails.rate = 0
        this.orderDetails.minerFee = 0
        this.destinationCoin.amount = 0
        localStorage.setItem('depositCoin', JSON.stringify(this.depositCoin))
        localStorage.setItem(
          'destSelected',
          JSON.stringify(this.destinationCoin.selected)
        )
        if (!this.error.pairOffline.state) {
          this.orderDetails.rate = response.data.data.rate
          this.orderDetails.minerFee = response.data.data.minerFee
          this.destinationCoin.amount = _.round(this.calcRate(), 4)
          this.destinationCoin.loading = false
          this.limit = response.data.data

          this.checkLimit(
            this.depositCoin.amount,
            this.limit.limitMinDepositCoin,
            this.limit.limitMaxDepositCoin,
            this.depositCoin.selected.symbol
          )
        }
        this.destinationCoin.loading = false
      })
    },
    getOrder() {
      this.orderDetails.loading = true
      EventService.getOrder({
        depositCoin: this.depositCoin.selected.symbol,
        destinationCoin: this.destinationCoin.selected.symbol,
        depositCoinAmount: this.depositCoin.amount,
        destinationAddress: {
          address: this.orderDetails.destinationAddress,
          tag: null
        }
      }).then(response => {
        this.orderDetails.orderId = response.data.data.orderId
        this.orderDetails.exchangeAddress =
          response.data.data.exchangeAddress.address
        if (this.orderDetails.orderId) {
          this.updateOrderStatus()
          this.orderDetails.loading = false
        }
      })
    },
    getAvailable() {
      EventService.getAvailable({
        depositCoin: this.depositCoin.selected.symbol,
        destinationCoin: this.destinationCoin.selected.symbol
      }).then(response => {
        this.error.pairOffline.state = false
        this.error.pairOffline.msg = ''
        if (response.data.data.length === 0) {
          this.error.pairOffline.state = true
          this.error.pairOffline.msg = `This trading pair is currently not
    available.`
        }
        this.getRate()
      })
    },
    updateOrderStatus() {
      EventService.getOrderStatus(this.orderDetails.orderId).then(response => {
        this.orderDetails.status = response.data.data.status
      })
    }
  },
  computed: {},
  watch: {
    'depositCoin.amount': {
      handler: function() {
        if (this.depositCoin.amount) {
          this.debouncedGetRate()
        }
      }
    },
    'depositCoin.selected': {
      handler: function() {
        this.getAvailable()
      }
    },
    'destinationCoin.selected': {
      handler: function() {
        this.getAvailable()
      }
    }
  },
  created() {
    this.debouncedGetRate = _.debounce(this.getRate, 2500)
  },
  mounted() {
    this.getCoins()
    if (localStorage.getItem('depositCoin')) {
      this.depositCoin = JSON.parse(localStorage.getItem('depositCoin'))
    }
    if (localStorage.getItem('destSelected')) {
      this.destinationCoin.selected = JSON.parse(
        localStorage.getItem('destSelected')
      )
    }
    window.setInterval(() => {
      if (this.orderDetails.orderId) {
        this.updateOrderStatus()
      }
    }, 30000)
  }
}
</script>
