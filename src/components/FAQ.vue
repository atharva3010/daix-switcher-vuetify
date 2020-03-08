<template>
  <div>
    <h2
      class="text-center my-10 font-weight-light"
      :class="$vuetify.breakpoint.smAndUp ? 'display-1' : 'headline'"
      style="letter-spacing:1px !important"
    >
      Frequently Asked Questions
    </h2>
    <v-expansion-panels class="mb-10">
      <h3 class="overline pb-1" style="font-size:0.8rem !important">
        About DAIX
      </h3>
      <v-expansion-panel v-for="(item, i) in aboutDaix" :key="i">
        <v-expansion-panel-header
          color="background"
          style="line-height:1.3em; font-size:1rem"
        >
          {{ item.q }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pt-4" color="background">
          {{ item.a }}
          <br />
          <div v-if="item.lc">
            <a :href="item.lc" rel="noopener" target="_blank"
              >LocalCryptos Profile</a
            ><br />
            <a :href="item.lb" rel="noopener" target="_blank"
              >LocalBitcoins Profile</a
            >
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels class="mb-10">
      <h3 class="overline pb-1" style="font-size:0.8rem !important">
        About Wallets
      </h3>
      <v-expansion-panel v-for="(item, i) in aboutWallets" :key="i">
        <v-expansion-panel-header
          color="background"
          style="line-height:1.3em; font-size:1rem"
        >
          {{ item.q }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pt-4" color="background">
          {{ item.a }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <div class="text-center">
        <h3 class="overline pb-1" style="font-size:0.8rem !important">
          About buying and selling
        </h3>
      </div>
      <v-expansion-panel v-for="(item, i) in aboutBuySell" :key="i">
        <v-expansion-panel-header
          color="background"
          style="line-height:1.3em; font-size:1rem"
        >
          {{ item.q }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pt-4" color="background">
          {{ item.a }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      aboutDaix: {
        1: {
          q: 'What is DAIX?',
          a: `DAIX is a platform functioning with the goal of making it
              simple to buy and sell cryptocurrency in Cambodia.`
        },
        2: {
          q: 'How do I buy and sell cryptocurrency using DAIX?',
          a: `DAIX supports all major payment methods in Cambodia. Please
              chat with you on Telegram or Facebook to make an exchange.`
        },
        3: {
          q: 'Why should I trust you?',
          a: `We at DAIX have been trading cryptocurrency and building a
              reputation in Cambodia for quite some time now. You can also
              find us on LocalCryptos.com LocalBitcoins.com, where we have
              collected countless feedback.`,
          lc: 'https://localcryptos.com/profile/daix.co',
          lb: 'https://localbitcoins.com/accounts/profile/Temboro/'
        },
        4: {
          q: 'What is our transaction fees?',
          a: `We charge between 3% to 5% depending on the current demand
              and supply. The conversion rate you see is inclusive of
              our fees.`
        }
      },
      aboutWallets: {
        1: {
          q: "What's the cryptocurrency wallet address?",
          a: `A cryptocurrency wallet is a digital place for your coins to be
          stored. Each coin has a certain wallet provider. That could be apps,
          web wallets and other applications. The wallet address represents a
          randomly generated combination of digits and letters. DAIX doesn’t
          provide wallet addresses and never stores user deposits. To exchange
          cryptocurrencies, you need to have a cryptocurrency wallet address.`
        },
        2: {
          q: 'How do I get a cryptocurrency wallet address?',
          a: `First, figure out, what coin you want to buy and then seek a stable
          wallet version. As a rule, each coin has its official wallet client. Note
          that each wallet has its unique address or a tag with a private key that
          is required to restore your wallet if lost. DAIX never asks your private
          keys. Store them in a safe place and never show them to anyone. If private
          keys are stolen by someone, your cryptocurrency wallet will no longer be safe.`
        },
        3: {
          q: "What's the recipient's address?",
          a: `In each transaction, there is always a sender and a recipient. The recipient’s 
          address is the cryptocurrency wallet address to receive the digital assets you want 
          to buy. For example, if you want to buy Bitcoin (BTC), in the field, you should 
          specify your BTC wallet address. In general, the recipient’s wallet address is the 
          address where we send the coins you bought, once a transaction is finished.`
        },
        4: {
          q: 'What is a transaction hash?',
          a: `A transaction hash (or the tx/transaction ID) is a unique address of your 
          transaction in a blockchain. Mostly, the hash is a combination of digits and 
          lower case letters that represents proof that money is sent. Whenever you make 
          a payment, you receive a hash displayed in your wallet. Hash should be located 
          in a blockchain. Our support team may ask you to provide a hash. Sometimes this 
          is required to find your payment and resolve issues if any.`
        }
      },
      aboutBuySell: {
        1: {
          q: 'What is the minimum/maximum amount?',
          a: `Currently the minimum amount is 50 USD and the maximum amount is 1,000 USD.`
        },
        2: {
          q: 'What are the network fees?',
          a: `Every cryptocurrency is based on a blockchain. The process requires a network 
          fee. This is a fee the blockchain takes from the amount you and we send, you can 
          check cryptocurrency charts to see the network congestion. This is why it is so 
          important to include network fees in the amount you send and going to get. If the 
          amount is too low to cover the fees, a transaction will fail.`
        },
        3: {
          q: 'When should I receive my money?',
          a: `Trade requests take 15-30 minutes to be answered. You can check on the blockchain 
          explorer if the transaction is currently being processed.
`
        },
        4: {
          q: 'Why does my transaction take so long?',
          a: `As a rule, our transaction takes 15-30 minutes to be processed. If your transaction 
          takes longer, this might be due to a wide range of factors. Most frequent are: Blockchain overloaded. 
          There are many transactions pending including yours. These issues take place on blockchains. 
          All you have to do is to wait. DAIX doesn't control blockchain delays. DDoS attacks. Any platform 
          may experience such issues. In this case, all you have to do is wait.`
        },
        5: {
          q: "Why isn't my Bitcoin showing in my wallet?",
          a: `Depending on which wallet or exchange you are using to receive the Bitcoin it 
          can take longer. This is usually because they require more network confirmation for 
          the Bitcoin to become visible in your account.`
        }
      }
    }
  }
}
</script>
