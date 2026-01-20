import axios from 'axios'
import { useAuthStore } from '../stores/auth.store'

const api = axios.create({
  baseURL: 'https://api.exemplo.com', // mock por enquanto
  timeout: 10000
})

// Request interceptor (antes de enviar)
api.interceptors.request.use(
  (config) => {
    const auth = useAuthStore()

    if (auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor (erros)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const auth = useAuthStore()

    if (error.response?.status === 401) {
      auth.logout()
      window.location.href = '/login'
    }

    return Promise.reject(error)
  }
)

export default api
