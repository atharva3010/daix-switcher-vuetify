<template>
  <div>
    <h2
      class="text-center my-10 font-weight-light"
      :class="$vuetify.breakpoint.smAndUp ? 'display-1' : 'headline'"
      style="letter-spacing:1px !important"
    >
      Learn About Cryptocurrency
    </h2>
    <div v-for="(article, articleIndex) in articles" :key="articleIndex">
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <a href="" style="text-decoration: none;">
          <v-card
            :elevation="hover ? 8 : 0"
            class="d-flex justify-space-between"
            color="bgsecondary"
            flat
          >
            <div
              :class="$vuetify.breakpoint.smAndUp ? 'headline' : 'sub-title'"
              class="pr-6 py-8 pl-2"
            >
              {{ article.title }}
            </div>
            <img
              class="py-8 pr-1"
              :style="
                $vuetify.breakpoint.smAndUp
                  ? 'max-width:240px'
                  : 'max-width:130px'
              "
              :src="article.img"
              style="border-radius:5px; object-fit: contain;"
            />
          </v-card>
        </a>
      </v-hover>

      <v-divider v-if="article.divider"></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      articles: {
        1: {
          title: 'Get a basic understanding of Bitcoin',
          path: '/basic-understanding-of-bitcoin',
          img: require('../assets/articles/what-is-btc.jpg'),
          divider: true
        },
        2: {
          title: '6 Things you can do with Bicoin',
          path: '/6-things-you-can-do-with-bitcoin',
          img: require('../assets/articles/btc-wallet.jpg'),
          divider: true
        },
        3: {
          title: '6 Things you can do with Bitcoin',
          path: '/6-things-you-can-do-with-bitcoin',
          img: require('../assets/articles/use-btc.png')
        }
      }
    }
  }
}
</script>
