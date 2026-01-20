<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
  <div class="container">
    <Sidebar />

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 2rem;
  background: #f8fafc;
}
</style>
