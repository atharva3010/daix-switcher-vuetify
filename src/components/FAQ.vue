<template>
  <v-expansion-panels>
    <h2
      class="text-center my-10 font-weight-light"
      :class="$vuetify.breakpoint.smAndUp ? 'display-1' : 'headline'"
      style="letter-spacing:1px !important"
    >
      Frequently Asked Questions
    </h2>

    <v-expansion-panel v-for="(item, i) in aboutDaix" :key="i">
      <v-expansion-panel-header color="background">
        {{ item.q }}
      </v-expansion-panel-header>
      <v-expansion-panel-content class="pt-4" color="background">
        {{ item.a }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      aboutDaix: {
        1: {
          q: 'Q:  What is DAIX?',
          a: `A:  DAIX is a platform functioning with the goal of making it 
              simple to buy and sell cryptocurrency in Cambodia.`
        },
        2: {
          q: 'Q:  How do I buy and sell cryptocurrency using DAIX?',
          a: `A:  DAIX supports all major payment methods in Cambodia. Please 
              chat with you on Telegram or Facebook to make an exchange.`
        },
        3: {
          q: 'Q:  Why should I trust you?',
          a: `A:  We at DAIX have been trading cryptocurrency and building a 
              reputation in Cambodia for quite some time now. You can also 
              find us on Localbitcoins.com, where we have 
              collected countless feedback.`
        },
        4: {
          q: 'Q:  What is our transaction fees?',
          a: `A:  We charge between 3% to 5% depending on the current demand 
              and supply. The conversion rate you see is inclusive of 
              our fees.`
        }
      }
    }
  }
}
</script>
