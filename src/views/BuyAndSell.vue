<template>
  <v-container fluid>
    <v-row justify="center" class="px-4">
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
      </v-col>
    </v-row>
    <v-row justify="center" class="my-6 px-4">
      <v-col cols="12" md="5" class="mb-10 text-center text-sm-left">
        <h4 class="pb-4 px-1 overline">
          We support local payment methods in Cambodia
        </h4>
        <v-chip class="pt-6 pb-5 py-7" color="bgsecondary">
          <div class="d-flex">
            <div
              v-for="(pm, pmIndex) in paymentMethods"
              :key="pmIndex"
              :class="pm.class"
            >
              <a target="_blank" :href="pm.link">
                <img
                  style="max-height:30px; max-width:90px; height:auto;"
                  :src="pm.logo"
                />
              </a>
            </div>
          </div>
        </v-chip>
      </v-col>
      <v-col cols="12" md="5" class="text-center text-sm-left">
        <h4 class="pb-10 px-1 overline">Current Exchange Rates</h4>
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
      class="px-2 mb-12"
      style="background-color: var(--v-background-base)"
    >
      <v-col cols="12" md="10">
        <Articles />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FAQ from '../components/FAQ.vue'
import ConnectButton from '../components/ConnectButton'
import Articles from '../components/Articles'

export default {
  name: 'BuyAndSell',
  components: {
    Articles,
    ConnectButton,
    FAQ
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
      }
    }
  }
}
</script>
