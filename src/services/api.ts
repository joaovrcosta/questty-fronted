import axios from 'axios'

const api = axios.create({
  baseURL: 'https://questty-api.onrender.com',
})

export default api
