<template>
  <v-container fluid>
    <v-row justify="center" class="px-4">
      <v-col cols="12" md="8" class="mb-8 markdown-style">
        <router-view class="pb-8" />
        <router-link :to="`/${$i18n.locale}`" tag="a" class="back"
          >&laquo; Back</router-link
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      langueages: {
        english: true
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style>
.markdown-style h1 {
  font-size: 3rem;
  margin: 0.8em 0;
  line-height: 1.1em;
  font-weight: 200;
}
.markdown-style h2 {
  padding-top: 1em;
  font-size: 2rem;
  margin-bottom: 1em;
  font-weight: 200;
}
.markdown-style h3 {
  font-weight: 200;
  font-size: 1.6rem;
  padding-bottom: 0.6em;
  padding-top: 1em;
}
.markdown-style img {
  max-width: 100%;
  margin-bottom: 2em;
}
.markdown-style ul {
  margin-bottom: 2em;
}
</style>
