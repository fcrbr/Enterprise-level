import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false);
  const user = ref<{ email: string } | null>(null);

  function login(email: string, _password: string) {
    isAuthenticated.value = true;
    user.value = { email };
  }

  function logout() {
    isAuthenticated.value = false;
    user.value = null;
  }

  return { isAuthenticated, user, login, logout };
});
