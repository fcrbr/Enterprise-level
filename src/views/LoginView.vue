<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth.store'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const auth = useAuthStore()
const router = useRouter()

function handleLogin() {
  auth.login(email.value, password.value)

  if (auth.isAuthenticated) {
    router.push('/dashboard')
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow w-96">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full mb-4 p-2 border rounded"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Senha"
        class="w-full mb-6 p-2 border rounded"
      />

      <button
        @click="handleLogin"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Entrar
      </button>
    </div>
  </div>
</template>
