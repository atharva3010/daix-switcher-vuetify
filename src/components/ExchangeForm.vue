<template>
  <v-row no-gutters>
    <span>{{ exchangeProps.label }} {{ exchangeProps.selected.name }}</span>
    <v-card class="pa-0 ma-0 d-flex white" width="100%" flat>
      <v-col cols="6" sm="6" md="6" class="pa-0 ma-0">
        <v-text-field
          :value="exchangeProps.amount"
          :readonly="exchangeProps.disabled"
          :disabled="exchangeProps.loading"
          placeholder="Enter Amount"
          type="number"
          class="pa-0 ma-0"
          color="secondary"
          style="border-inline:1px solid black; border-radius:0;
          font-weight: bold;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;"
          hide-details
          outlined
          light
          @input="$emit('input', $event)"
        />
      </v-col>
      <v-col cols="6" sm="6" md="6" class="pa-0 pl-0">
        <v-dialog
          v-model="dialog"
          :fullscreen="$vuetify.breakpoint.xsOnly"
          width="600px"
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              class="black--text"
              style="border-radius:0;
              border:1px solid grey;
              border-bottom-right-radius: 4px;
              border-top-right-radius: 4px;
              border-left:none;"
              height="56px"
              block
              outlined
              v-on="on"
              ><v-spacer />
              <v-img
                class="mr-3"
                style="max-width:23px; border-radius:50%"
                :src="exchangeProps.selected.logoUrl"
              />

              {{ exchangeProps.selected.symbol }}

              <!-- TODO: fix the width no matter how long coin symbol is -->
              <v-spacer /><v-icon size="28" right
                >mdi-chevron-down</v-icon
              ></v-btn
            >
          </template>
          <v-card
            class="mx-auto background"
            style="width:inherit"
            height="450px"
          >
            <div class="px-0">
              <div class="pa-3 pb-0 text-right">
                <v-btn icon @click.stop="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
              <div>
                <v-text-field
                  v-model="searchCoin"
                  placeholder="Search.."
                  class="px-8 mt-0 pt-0"
                  autofocus
                />
              </div>
            </div>
            <div height="100%">
              <keep-alive>
                <v-list flat style="overflow-y:hidden" class="background">
                  <v-subheader class="pl-8">Available Coins</v-subheader>
                  <v-list-item-group color="primary">
                    <v-list-item
                      @click="selectCoin(coin)"
                      v-for="(coin, coinIndex) in filterCoins"
                      :key="coinIndex"
                      class="px-8"
                    >
                      <v-img
                        class="mr-3"
                        style="max-width:30px; border-radius:50%"
                        :src="coin.logoUrl"
                      />
                      <v-list-item-content>
                        <v-list-item-title
                          class="ml-4"
                          style="text-transform:uppercase"
                          v-text="coin.symbol"
                        />
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-title v-text="coin.name" />
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </keep-alive>
            </div>
          </v-card>
        </v-dialog>
      </v-col>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'ExchangeForm',
  props: {
    coins: Array,
    exchangeProps: Object
  },

  data: () => ({
    dialog: false,
    loadList: false,
    searchCoin: ''
  }),
  computed: {
    filterCoins() {
      return this.coins.filter(coin => {
        return (
          coin.isActive === true &&
          coin.isFiat === false &&
          (coin.symbol.toLowerCase().indexOf(this.searchCoin.toLowerCase()) >
            -1 ||
            coin.name.toLowerCase().indexOf(this.searchCoin.toLowerCase()) > -1)
        )
      })
    }
  },
  methods: {
    selectCoin(coin) {
      this.$emit('select-coin', coin)
      this.dialog = false
    }
  }
}
</script>

<style scoped></style>
