import axios from 'axios'

const API_KEY = 'cde178ec-3b8a-42f4-a0ff-1821708aecdc'

const apiClient = axios.create({
  baseURL:
    'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XTZ,USDT,LINK&tsyms=USD&api_key=f4f91df3fda2dcdc9c21d45320b4be89632cb4b352d65ae565c99ec6d5c8cbf6',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCoinPrice() {
    return apiClient.get()
  }
}
