<template>
  <v-container fluid>
    <v-row justify="center" class="px-4 text-center">
      <v-col cols="12" md="10">
        <h1
          class="mb-12 py-6 font-weight-bold"
          :class="[
            $vuetify.breakpoint.mdAndUp
              ? 'display-3'
              : $vuetify.breakpoint.smAndUp
              ? 'display-2'
              : 'display-1'
          ]"
          style="line-height:1.05"
        >
          Buy & Sell Bitcoin <br />
          in Cambodia
        </h1>
        <span
          class="pt-8"
          :class="[$vuetify.breakpoint.mdAndUp ? 'headline' : 'title']"
          style="line-height:1.2"
        >
          Exchange directly with us on Telegram and Facebook.
        </span>
        <div class="mt-6">
          <ConnectButton />
        </div>
        <span
          class="pt-8"
          :class="[$vuetify.breakpoint.mdAndUp ? 'headline' : 'title']"
          style="line-height:1.2"
        >
          Want to exchange Crypto to Crypto?
        </span>
        <div class="mt-6">
          <GoToSwap />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-6 px-4">
      <v-col cols="12" md="4" class="mb-10 text-center">
        <h4 class="pb-4 px-1 overline" style="font-size: 0.7rem !important">
          We support local payment methods in Cambodia
        </h4>
        <v-chip class="pt-6 pb-5 py-7" color="bgsecondary">
          <div class="d-flex">
            <div
              v-for="(pm, pmIndex) in paymentMethods"
              :key="pmIndex"
              :class="pm.class"
            >
              <a target="_blank" rel="noopener" :href="pm.link">
                <img
                  style="max-height:30px; max-width:90px; height:auto;"
                  :src="pm.logo"
                  alt="payment method logo"
                />
              </a>
            </div>
          </div>
        </v-chip>
      </v-col>
      <v-col cols="12" md="4" class="mb-10 text-center">
        <h4 class="pb-4 px-1 overline" style="font-size: 0.7rem !important">
          Current Cryptocurrency Exchange Rates
        </h4>
        <RatesTable />
      </v-col>
    </v-row>
    <v-row
      justify="center"
      class="px-2 pb-12"
      style="background-color: var(--v-bgsecondary-base)"
    >
      <v-col cols="12" md="10">
        <FAQ />
      </v-col>
    </v-row>
    <v-row
      justify="center"
      class="mb-12"
      style="background-color: var(--v-background-base)"
    >
      <v-col cols="12" md="10">
        <Articles />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GoToSwap from '../components/GoToSwap.vue'
import RatesTable from '../components/RatesTable.vue'
import FAQ from '../components/FAQ.vue'
import ConnectButton from '../components/ConnectButton'
import Articles from '../components/Articles'

export default {
  name: 'BuyAndSell',
  components: {
    Articles,
    ConnectButton,
    FAQ,
    RatesTable,
    GoToSwap
  },
  data() {
    return {
      paymentMethods: {
        wing: {
          logo: require('../assets/wing.png'),
          link: 'https://www.wingmoney.com/en/personal/transfer-money/',
          class: 'pr-5'
        },
        aba: {
          logo: require('../assets/aba.png'),
          link: 'https://www.google.com/search?q=aba+bank',
          class: 'pr-5'
        },
        truemoney: {
          logo: require('../assets/truemoney.png'),
          link: 'https://www.truemoney.com.kh/',
          class: 'pr-0'
        }
      },
      metaInfo: {
        title: 'Buy and Sell Bitcoin',
        // override the parent template and just use the above title only
        titleTemplate: null
      }
    }
  },
  methods: {
    methods: {
      track() {
        this.$ga.page('/')
      }
    }
  }
}
</script>
