<template>
  <v-container fluid>
    <v-row justify="center" class="px-4">
      <v-col cols="12" md="8">
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
  margin: 1em 0;
  line-height: 1.1em;
  font-weight: 200;
}
h2 {
  font-size: 2rem;
  margin-bottom: 0.2em;
  font-weight: 200;
}
p {
  padding: 1em 0;
}
img {
  max-width: 100%;
}
</style>
