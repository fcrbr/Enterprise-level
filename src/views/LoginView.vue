<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth.store';

const auth = useAuthStore();

const email = ref('');
const password = ref('');

function handleLogin() {
  auth.login(email.value, password.value);
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-full max-w-sm p-6 border rounded">
      <h1 class="text-xl font-bold mb-4">Login</h1>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full mb-3 p-2 border rounded"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full mb-4 p-2 border rounded"
      />

      <button
        class="w-full bg-black text-white py-2 rounded"
        @click="handleLogin"
      >
        Sign in
      </button>
    </div>
  </div>
</template>
