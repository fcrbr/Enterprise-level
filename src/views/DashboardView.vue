<script setup lang="ts">
import { useAuthStore } from '../stores/auth.store';

const auth = useAuthStore();
</script>

<template>
  <div class="min-h-screen p-6">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>

    <p class="mb-4">Logged as: {{ auth.user?.email }}</p>

    <button
      class="bg-red-600 text-white px-4 py-2 rounded"
      @click="auth.logout()"
    >
      Logout
    </button>
  </div>
</template>
