import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// bootstrap & icons
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/assets/bootstrap_themes/darkly.min.css"

// i18n
import { createI18n } from 'vue-i18n'
import locale_from_file from '@/assets/locale.json'
const i18n = createI18n({
  legacy: false,
  locale: 'en', // console.log("nav", navigator.language);
  fallbackLocale: 'en',
  messages: locale_from_file,
})

const app = createApp(App)

app.use(createPinia())
  .use(router)
  .use(i18n)
  .mount('#app')