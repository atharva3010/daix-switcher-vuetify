<template>
  <div class="text-center ml-4 py-2">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <div v-on="on" height="100%">
          <img
            class="mr-1"
            style="width:20px; vertical-align: middle"
            :src="require('../assets/' + $i18n.locale + '.png')"
            alt="country flag"
          />
          <v-icon small>mdi-chevron-down</v-icon>
        </div>
      </template>
      <v-list class="py-1">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="setLocale(item.lang)"
        >
          <img class="mr-2" style="width:20px" :src="item.flag" alt="flag" />
          <v-list-item-title>{{ item.lang.toUpperCase() }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: {
      en: { lang: 'en', flag: require('../assets/en.png') },
      kh: { lang: 'kh', flag: require('../assets/kh.png') }
    },
    closeOnClick: true
  }),
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
    }
  }
}
</script>
