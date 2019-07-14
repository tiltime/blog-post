import axios from 'axios'

const api = axios.create({
  baseURL: 'http://maqe.github.io/json'
})

export default api