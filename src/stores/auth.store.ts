import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // state
  const user = ref<{ name: string } | null>(null)
  const token = ref<string | null>(null)

  // getters
  const isAuthenticated = computed(() => !!token.value)

  // actions
  function login(email: string, password: string) {
    // 🔹 mock de login (simula API)
    if (email && password) {
      user.value = { name: 'Filipe Corrêa' }
      token.value = 'fake-jwt-token'
    }
  }

  function logout() {
    user.value = null
    token.value = null
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout
  }
})
