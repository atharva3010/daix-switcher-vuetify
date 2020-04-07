<template>
  <v-container fluid>
    <v-row justify="center" class="px-4">
      <v-col cols="12" md="8">
        <h1
          class="py-6 font-weight-bold"
          :class="[
            $vuetify.breakpoint.mdAndUp
              ? 'display-3'
              : $vuetify.breakpoint.smAndUp
              ? 'display-2'
              : 'display-1'
          ]"
          style="line-height:1.05"
          v-html="$t('Content.BuyAndSell.header')"
        />
        <v-chip class="pt-6 mb-12 py-7" color="white">
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
    </v-row>
    <v-row justify="center" class="my-sm-12 px-4">
      <v-col cols="12" md="4" class="px-8">
        <img
          width="100%"
          src="@/assets/undraw_mobile_messages.svg"
          alt="Illutration of a guy sending a message on his phone"
        />
      </v-col>
      <v-col cols="12" md="4" class="px-sm-8">
        <div class="text-sm-right text-center">
          <div class="pb-8 pl-sm-10">
            <span
              :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'headline']"
              style="line-height:1.2; font-size:1.8rem !important"
            >
              {{ $t('Content.BuyAndSell.connect-title') }}
            </span>
          </div>

          <ConnectButton
            name="Telegram"
            link="https://t.me/daixco"
            icon="mdi-telegram"
            color="#0088cc"
          />
          <ConnectButton
            name="Facebook"
            link="https://m.me/daixcambodia"
            icon="mdi-facebook-messenger"
            color="#0084ff"
          />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="px-4 text-center py-12">
      <v-col cols="12" md="4" class="px-sm-8">
        <div class="text-sm-left text-center">
          <div class="pb-8 pr-sm-10">
            <span
              :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'headline']"
              style="line-height:1.2; font-size:1.8rem !important"
            >
              {{ $t('Content.BuyAndSell.local-title') }}
            </span>
          </div>
          <ExchangesButton
            name="LocalCryptos"
            link="https://localcryptos.com/profile/daix.co"
            color="#8a64de"
          />
          <ExchangesButton
            name="LocalBitcoins"
            link="https://localbitcoins.com/accounts/profile/Temboro/"
            color="#ff9d57"
          />
        </div>
      </v-col>
      <v-col cols="12" md="4" class="px-8">
        <img width="100%" src="@/assets/undraw_tabs.svg" alt="" />
      </v-col>
    </v-row>
    <!-- <v-row justify="center" class="px-4 my-sm-12 text-center">
      <v-col cols="12" md="4">
        <div class="mt-6">
          <span
            class="pt-8"
            :class="[$vuetify.breakpoint.mdAndUp ? 'headline' : 'title']"
            style="line-height:1.2"
          >
            {{ $t('Content.BuyAndSell.swap-title') }}
          </span>
          <GoToSwap />
        </div>
      </v-col>
    </v-row> -->
    <!-- <v-row justify="center" class="mt-12 mb-sm-4 px-4">
      <v-col cols="12" md="4" class="mb-10 text-center">
        <h4 class="pb-4 px-1 overline" style="font-size: 0.7rem !important">
          {{ $t('Content.BuyAndSell.payment-title') }}
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
          {{ $t('Content.BuyAndSell.rates-title') }}
        </h4>
        <RatesTable />
      </v-col>
    </v-row> -->
    <v-row
      justify="center"
      class="px-2 pb-12"
      style="background-color: var(--v-bgsecondary-base)"
    >
      <v-col cols="12" md="8">
        <FAQ />
      </v-col>
    </v-row>
    <v-row
      justify="center"
      class="mb-12"
      style="background-color: var(--v-background-base)"
    >
      <v-col cols="12" md="8">
        <Articles />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExchangesButton from '../components/ExchangesButton.vue'
// import GoToSwap from '../components/GoToSwap.vue'
// import RatesTable from '../components/RatesTable.vue'
import FAQ from '../components/FAQ.vue'
import ConnectButton from '../components/ConnectButton'
import Articles from '../components/Articles'

export default {
  name: 'BuyAndSell',
  components: {
    Articles,
    ConnectButton,
    FAQ,
    ExchangesButton
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
  },
  methods: {
    track() {
      this.$ga.page('/')
    }
  }
}
</script>
