<template>
  <div>
    <v-simple-table
      fixed-header
      style="background-color: var(--v-background-base)"
    >
      <template v-slot:default>
        <thead>
          <tr color="primary">
            <th
              style="background-color: var(--v-background-base)"
              class="text-left"
            ></th>
            <th
              style="background-color: var(--v-background-base)"
              class="text-left"
            >
              BUY (USD)
            </th>
            <th
              style="background-color: var(--v-background-base)"
              class="text-left"
            >
              SELL (USD)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-left" v-for="coin in coins" :key="coin.name">
            <td class="d-flex align-center">
              <v-img
                class="mr-md-6 mr-3"
                style="max-width:30px; border-radius:50%"
                :src="coin.img"
                alt="coin logo"
              />
              <span>
                {{ coin.name }}
              </span>
            </td>
            <td style="letter-spacing: 1px">{{ calcBuy(coin) }}</td>
            <td style="letter-spacing: 1px">{{ calcSell(coin) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import EventServiceCC from '../services/EventServiceCC'
import _ from 'lodash'

export default {
  data() {
    return {
      error: {},
      coins: [
        {
          name: 'Bitcoin',
          symbol: 'BTC',
          price: 0,
          img: 'https://files.coinswitch.co/public/coins/btc.png'
        },
        {
          name: 'Ethereum',
          symbol: 'ETH',
          price: 0,
          img: 'https://files.coinswitch.co/public/coins/eth.png'
        },
        {
          name: 'DAI',
          symbol: 'DAI',
          price: 0,
          img: 'https://files.coinswitch.co/public/coins/dai_2.png'
        },
        {
          name: 'USD Coin',
          symbol: 'USDC',
          price: 0,
          img: 'https://files.coinswitch.co/public/coins/usdc.png'
        },
        {
          name: 'Tether',
          symbol: 'USDT',
          price: 0,
          img: 'https://files.coinswitch.co/public/coins/usdt.png'
        }
      ]
    }
  },
  methods: {
    getPrice() {
      EventServiceCC.getCoinPrice({}).then(response => {
        this.coins[0].price = response.data.BTC.USD
        this.coins[1].price = response.data.ETH.USD
        this.coins[2].price = response.data.DAI.USD
        this.coins[3].price = response.data.USDC.USD
        this.coins[4].price = response.data.USDT.USD
      })
    },
    calcBuy(coin) {
      if (coin.price) {
        if (coin.symbol === 'BTC') {
          return _.round(coin.price * 1.05, 2)
        } else {
          return _.round(coin.price * 1.06, 2)
        }
      } else {
        return 0
      }
    },
    calcSell(coin) {
      if (coin.price) {
        if (coin.symbol === 'BTC') {
          return _.round(coin.price * 0.95, 2)
        } else {
          return _.round(coin.price * 0.94, 2)
        }
      } else {
        return 0
      }
    }
  },
  created() {
    this.getPrice()
  }
}
</script>
