<template>
  <div id="nav">
    <v-app-bar color="background" flat app>
      <v-app-bar-nav-icon @click.stop="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title style="letter-spacing:4px">DAIX</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title style="letter-spacing:4px">
            DAIX
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon @click.stop="drawer = false" link>
          <v-icon>mdi-close</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item
        color="secondary"
        :to="view.path"
        v-for="(view, i) in views"
        :key="i"
        link
      >
        <v-list-item-icon class="mr-3">
          <v-icon class="list-icon" dense>{{ view.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="view.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-switch
          v-model="$vuetify.theme.dark"
          hide-details
          inset
          label="Theme Dark"
          color="accent"
        ></v-switch>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: false,
      views: [
        {
          name: 'Exchange',
          path: '/',
          icon: 'mdi-swap-vertical-bold'
        },
        {
          name: 'Orders',
          path: '/orders',
          icon: 'mdi-history'
        }
      ]
    }
  }
}
</script>

<style scoped>
.v-list-item--active .list-icon {
  color: var(--v-secondary-base);
}
</style>
