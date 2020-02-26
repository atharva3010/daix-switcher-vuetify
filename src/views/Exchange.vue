<template>
  <v-container>
    <v-row justify="center">
      <v-col class="px-5" sm="8" cols="12">
        <div class="font-weight-light">
          <h1 class="mb-5 pt-6 font-regular" style="line-height:1.05">
            Swap Your Cryptocurrency
          </h1>
          <p class="subtitle-1 mb-4" style="line-height:1.2">
            Trade 300+ coins without signing up for an account.
          </p>
        </div>
        <v-card color="background-secondary" class="pt-10 pb-6" flat>
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

          <div class="text-right">
            <v-btn text icon @click="swapCoins">
              <!-- TODO: make swap-vertical icon spin once on click -->
              <v-icon size="30">mdi-swap-vertical</v-icon>
            </v-btn>
          </div>

          <ExchangeForm
            v-model.number="destinationCoin.amount"
            :coins="coins"
            :exchangeProps="destinationCoin"
            class="mt-3"
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
            class="mt-4 px-5"
            height="45px"
            @click.stop="showExchangeDialog = true"
            depressed
          >
            Proceed
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
import axios from 'axios'
import ExchangeForm from '../components/ExchangeForm'
import ExchangeDialog from '../components/ExchangeDialog'
import ExchangeAlert from '../components/ExchangeAlert'

import _ from 'lodash'

const API_URL = 'https://api.coinswitch.co/v2/'
const API_KEY = 'Y72jsy9iwD5uiazajayqp190dhjabn3kjauis'

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
        confirmed: false,
        loading: false,
        destinationAddress: '',
        status: 'Awaiting Deposit',
        rate: 0,
        minerFee: 0
      }
    }
  },
  methods: {
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

    // API CALLS
    postRequest(method, route, data, callback) {
      axios({
        method: method,
        url: API_URL + route,
        headers: {
          'x-api-key': API_KEY
        },
        data: method == 'post' ? data : undefined
      }).then(callback)
    },
    getCoin() {
      this.postRequest('get', 'coins', 'none', response => {
        this.coins = response.data.data
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
      this.postRequest(
        'post',
        'rate',
        {
          depositCoin: this.depositCoin.selected.symbol,
          destinationCoin: this.destinationCoin.selected.symbol
        },
        response => {
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
            this.destinationCoin.amount = _.round(this.calcRate(), 6)
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
        }
      )
    },
    getOrder() {
      this.orderDetails.loading = true
      this.postRequest(
        'post',
        'order',
        {
          depositCoin: this.depositCoin.selected.symbol,
          destinationCoin: this.destinationCoin.selected.symbol,
          depositCoinAmount: this.depositCoin.amount,
          destinationAddress: {
            address: this.orderDetails.destinationAddress,
            tag: null
          }
        },
        response => {
          this.orderDetails.orderId = response.data.data.orderId
          this.orderDetails.exchangeAddress =
            response.data.data.exchangeAddress.address
          if (this.orderDetails.orderId) {
            this.orderDetails.confirmed = true
            this.orderDetails.loading = false
          }
        }
      )
    },
    getAvailable() {
      this.postRequest(
        'post',
        'pairs',
        {
          depositCoin: this.depositCoin.selected.symbol,
          destinationCoin: this.destinationCoin.selected.symbol
        },
        response => {
          this.error.pairOffline.state = false
          this.error.pairOffline.msg = ''
          if (response.data.data.length === 0) {
            this.error.pairOffline.state = true
            this.error.pairOffline.msg = `This trading pair is currently not
    available.`
          }
          this.getRate()
        }
      )
    }
    // getOrderStatus() {
    //   this.postRequest(
    //     'get',
    //     'order/22222222-6c9e-4c53-9a6d-55e089aebd04',
    //     'none',
    //     response => {
    //       console.log(response)
    //     }
    //   )
    // }
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
    this.getCoin()
    if (localStorage.getItem('depositCoin')) {
      this.depositCoin = JSON.parse(localStorage.getItem('depositCoin'))
    }
    if (localStorage.getItem('destSelected')) {
      this.destinationCoin.selected = JSON.parse(
        localStorage.getItem('destSelected')
      )
    }
  }
}
</script>
