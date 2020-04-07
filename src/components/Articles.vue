<template>
  <div>
    <h2
      class="text-center my-10 font-weight-light"
      :class="$vuetify.breakpoint.smAndUp ? 'display-1' : 'headline'"
      style="letter-spacing:1px !important"
    >
      {{ $t('Content.BuyAndSell.article-title') }}
    </h2>
    <div
      class="section"
      style="cursor:pointer"
      v-for="article in $t('Articles')"
      :key="article.id"
      @click="$router.push({ name: article.id })"
    >
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-card
          :elevation="hover ? 8 : 0"
          class="d-flex justify-space-between py-8"
          color="background"
          flat
        >
          <div
            :class="$vuetify.breakpoint.smAndUp ? 'headline' : 'sub-title'"
            class="pr-6 pl-5"
            :style="$vuetify.breakpoint.smAndUp ? 'width:40%' : 'width:80%'"
          >
            {{ article.title }}
            <br /><span class="overline">{{ article.date }}</span>
          </div>
          <div
            v-if="$vuetify.breakpoint.smAndUp"
            style="width:50%"
            class="px-8 ma-0 body-2"
          >
            {{ article.description }}
          </div>
          <img
            :style="
              $vuetify.breakpoint.smAndUp
                ? 'max-width:240px'
                : 'max-width:130px'
            "
            :src="article.img"
            style="border-radius:1px; object-fit: contain;"
            class="pr-5 mb-0"
            alt="article header img"
          />
        </v-card>
      </v-hover>

      <v-divider v-if="article.divider"></v-divider>
    </div>
  </div>
</template>

<script>
const images = require.context(
  '@/assets/articles',
  false,
  /\.png$|\.jpg$|\.webp$/
)

export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    loadImg(imgPath) {
      return images('./' + imgPath)
    },
    track() {
      this.$ga.page('/articles')
    }
  }
}
</script>
