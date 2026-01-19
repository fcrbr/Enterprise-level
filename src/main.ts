import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './assets/main.css'
import App from './App.vue';
import router from './router'

//const app = createApp(App)

//app.use(createPinia()) // 🍍 REGISTRA O PINIA
//app.use(router)

createApp(App)
  .use(createPinia())
  .use(router)   // 👈 ESSENCIAL
  .mount('#app')