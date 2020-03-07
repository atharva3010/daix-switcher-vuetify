import axios from 'axios'

const API_KEY = 'ppQ2i1RKeg25x2bl3a2eAIJugeoWhPf56QEVNKLa'

const apiClient = axios.create({
  baseURL: 'https://api.coinswitch.co/v2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': API_KEY
  }
})

export default {
  getCoins() {
    return apiClient.get('/coins')
  },
  getRate(data) {
    return apiClient.post('/rate', data)
  },
  getOrder(data) {
    return apiClient.post('/order', data)
  },
  getAvailable(data) {
    return apiClient.post('/pairs', data)
  },
  getOrderStatus(id) {
    return apiClient.get('/order/' + id)
  }
}
