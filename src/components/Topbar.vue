<script setup lang="ts">
defineProps<{
  collapsed: boolean
  toggle: () => void
}>()
</script>

<template>
  <header
    class="h-14 bg-white border-b flex items-center px-4 justify-between"
  >
    <button
      @click="toggle"
      class="p-2 rounded hover:bg-gray-100"
    >
      ☰
    </button>

    <div class="font-medium">
      Dashboard
    </div>
  </header>
</template>
