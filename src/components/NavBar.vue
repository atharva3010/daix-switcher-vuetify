<template>
  <div id="nav">
    <v-app-bar color="background" flat app>
      <v-app-bar-nav-icon @click.stop="drawer = true"></v-app-bar-nav-icon>
      <LangSwitcher v-if="!$route.path.includes('articles')" />
      <v-spacer></v-spacer>

      <v-toolbar-title
        :class="[$vuetify.breakpoint.smAndUp ? 'display-1' : 'headline']"
        style="letter-spacing:5px !important"
      >
        <router-link
          style="text-decoration:none; color: inherit;"
          :to="`/${$i18n.locale}`"
        >
          {{ title }}
        </router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list flat max="1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              :class="[$vuetify.breakpoint.smAndUp ? 'headline' : 'title']"
              style="letter-spacing:4px !important"
            >
              {{ title }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon @click.stop="drawer = false" link>
            <v-icon>mdi-close</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item
          color="secondary"
          :to="{ name: view.name }"
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
            label="Dark Theme"
            color="accent"
          />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LangSwitcher from './LangSwitcher.vue'

export default {
  name: 'NavBar',
  components: {
    LangSwitcher
  },
  data() {
    return {
      title: 'DAIX',
      drawer: false,
      views: [
        {
          name: 'Buy & Sell',
          icon: 'mdi-cash-usd-outline'
        },
        {
          name: 'Swap',
          icon: 'mdi-swap-vertical-bold'
        }
        // {
        //   name: 'Orders',
        //   path: '/orders',
        //   icon: 'mdi-history'
        // }
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
