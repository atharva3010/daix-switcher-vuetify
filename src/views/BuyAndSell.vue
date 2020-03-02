<template>
  <v-container fluid>
    <v-row justify="center" class="px-4">
      <v-col cols="12" md="10">
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
          Buy & Sell Bitcoin <br />
          in Cambodia
        </h1>
        <span
          class="mb-4"
          :class="[$vuetify.breakpoint.mdAndUp ? 'headline' : 'title']"
          style="line-height:1.2"
        >
          Exchange directly with us on Telegram and Facebook.
        </span>
        <div class="mt-10">
          <img class="pa-4" style="width:200px" src="../assets/facebook.png" />
          <img class="pa-4" style="width:200px" src="../assets/facebook.png" />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-12 px-4">
      <v-col cols="12" md="5" class="mb-10 text-center text-sm-left">
        <h4 class="pb-4">
          We support local payment methods in Cambodia.
        </h4>
        <v-chip class="pa-6 pb-5" color="bgsecondary">
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
        <h4 class="pb-10">Current Exchange Rates</h4>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      class="px-2"
      style="background-color: var(--v-bgsecondary-base)"
    >
      <v-col cols="12" md="10">
        <Articles />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Articles from '../components/Articles'

export default {
  name: 'BuyAndSell',
  components: {
    Articles
  },
  data() {
    return {
      paymentMethods: {
        wing: {
          logo: require('../assets/wing.png'),
          link: 'https://google.com/hi',
          class: 'pr-5'
        },
        aba: {
          logo: require('../assets/aba.png'),
          link: 'https://google.com/hii',
          class: 'pr-5'
        },
        truemoney: {
          logo: require('../assets/truemoney.png'),
          link: 'https://google.com/hiii',
          class: 'pr-0'
        }
      }
    }
  }
}
</script>
