<template>
  <div>
    <h2
      class="text-center my-10 font-weight-light"
      :class="$vuetify.breakpoint.smAndUp ? 'display-1' : 'headline'"
      style="letter-spacing:1px !important"
    >
      {{ $t('Content.FAQ.header') }}
    </h2>
    <v-expansion-panels class="mb-10">
      <v-expansion-panel
        v-for="(item, i) in faqLocale.Content.FAQ.Faqs"
        :key="i"
      >
        <v-expansion-panel-header
          color="background"
          style="line-height:1.3em; font-size:1rem"
        >
          {{ item.q }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pt-4" color="background">
          {{ item.a }}
          <br />
          <div v-if="item.lc">
            <a :href="item.lc" rel="noopener" target="_blank"
              >LocalCryptos Profile</a
            ><br />
            <a :href="item.lb" rel="noopener" target="_blank"
              >LocalBitcoins Profile</a
            >
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import en from '@/locales/en.json'
import kh from '@/locales/kh.json'
import i18n from '@/i18n'

export default {
  name: 'FAQ',
  data() {
    return {}
  },
  computed: {
    faqLocale() {
      if (i18n.locale === 'en') {
        return en
      }
      if (i18n.locale === 'kh') {
        return kh
      } else {
        return en
      }
    }
  }
}
</script>
