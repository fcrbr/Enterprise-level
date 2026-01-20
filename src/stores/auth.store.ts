import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '../services/api'

type User = {
  name: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(
    JSON.parse(localStorage.getItem('user') || 'null')
  )

  const token = ref<string | null>(
    localStorage.getItem('token')
  )

  const isAuthenticated = computed(() => !!token.value)

 async function login(email: string, password: string) {
  if (!email || !password) return

  // 🔹 Simulando API
  const response = {
    data: {
      token: 'fake-jwt-token',
      user: { name: 'Filipe Corrêa' }
    }
  }

  token.value = response.data.token
  user.value = response.data.user

  localStorage.setItem('token', token.value)
  localStorage.setItem('user', JSON.stringify(user.value))
}

  function logout() {
    user.value = null
    token.value = null

    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout
  }
})
