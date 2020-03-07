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
              BUY
            </th>
            <th
              style="background-color: var(--v-background-base)"
              class="text-left"
            >
              SELL
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-left" v-for="coin in coins" :key="coin.name">
            <td class="d-flex align-center">
              <v-img
                class="mr-6"
                style="max-width:30px; border-radius:50%"
                :src="coin.img"
              />
              <span>
                {{ coin.name }}
              </span>
            </td>
            <td>{{ calcBuy(coin) }}</td>
            <td>{{ calcSell(coin) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import EventServiceCMC from '../services/EventServiceCMC'
import _ from 'lodash'

export default {
  data() {
    return {
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
          name: 'Tezos',
          symbol: 'XTZ',
          price: 0,
          img: 'https://files.coinswitch.co/public/coins/xtz.png'
        },
        {
          name: 'Tether',
          symbol: 'USDT',
          price: 0,
          img: 'https://files.coinswitch.co/public/coins/usdt.png'
        },
        {
          name: 'Link',
          symbol: 'LINK',
          price: 0,
          img: 'https://files.coinswitch.co/public/coins/link.png'
        }
      ]
    }
  },
  methods: {
    getPrice() {
      EventServiceCMC.getCoinPrice({}).then(response => {
        this.coins[0].price = response.data.BTC.USD
        this.coins[1].price = response.data.ETH.USD
        this.coins[2].price = response.data.XTZ.USD
        this.coins[3].price = response.data.USDT.USD
        this.coins[4].price = response.data.LINK.USD
      })
    },
    calcBuy(coin) {
      if (coin.price) {
        return _.round(coin.price * 1.05, 2) + ' USD'
      }
    },
    calcSell(coin) {
      return _.round(coin.price * 0.95, 2) + ' USD'
    }
  },
  created() {
    this.getPrice()
  }
}
</script>

<style></style>
