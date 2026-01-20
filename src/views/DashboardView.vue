<script setup lang="ts">
import { useAuthStore } from '../stores/auth.store';

const auth = useAuthStore();
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Bem-vindo ao painel administrativo.</p>
  </div>
</template>
