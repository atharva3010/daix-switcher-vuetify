<template>
  <v-container fluid>
    <v-row justify="center" class="px-4">
      <v-col cols="12" md="8" class="mb-8">
        <router-view />
        <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style>
h1 {
  font-size: 3rem;
  margin: 0.5em 0;
  line-height: 1.1em;
  font-weight: 200;
}
h2 {
  padding-top: 1em;
  font-size: 2rem;
  margin-bottom: 1em;
  font-weight: 200;
}
h3 {
  font-weight: 200;
  font-size: 1.6rem;
  padding-bottom: 0.6em;
  padding-top: 1em;
}
img {
  max-width: 100%;
  margin-bottom: 2em;
}
ul {
  margin-bottom: 2em;
}
</style>
