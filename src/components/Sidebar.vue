<script setup lang="ts">
import { useAuthStore } from '../stores/auth.store'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <aside class="sidebar">
    <h2 class="logo">FinTrack</h2>

    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/users">Usuários</router-link>
    </nav>

    <button class="logout" @click="logout">
      Sair
    </button>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 240px;
  background: #0f172a;
  color: #fff;
  height: 100vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.logo {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

nav {
  flex: 1;
}

a {
  display: block;
  color: #cbd5f5;
  text-decoration: none;
  margin-bottom: 1rem;
}

a.router-link-active {
  color: #38bdf8;
  font-weight: bold;
}

.logout {
  background: #ef4444;
  border: none;
  color: white;
  padding: 0.6rem;
  cursor: pointer;
  border-radius: 4px;
}
</style>
