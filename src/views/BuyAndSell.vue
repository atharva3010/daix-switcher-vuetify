<template>
  <v-container class="px-5">
    <v-row justify="center">
      <v-col cols="12" sm="10">
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
      </v-col>
    </v-row>
    <v-row justify="center" class="my-12">
      <v-col cols="12" sm="5">
        <h4 class="py-6">
          We support local payment methods in Cambodia.
        </h4>
        <v-chip class="pa-6 pb-5">
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
      <v-col cols="12" sm="5">
        <h4 class="py-6">Our Current Exchange Rates</h4>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10">
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
