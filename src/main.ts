import { createApp } from 'vue'
import App from './App.vue'
import { setupHead } from './modules/head'
import { setupPinia } from './modules/pinia'
import { router, setupRouter } from './modules/router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

async function bootstrap() {
  const app = createApp(App)

  setupRouter(app)
  setupHead(app)
  setupPinia(app)

  await router.isReady()

  app.mount('#app', true)
}

bootstrap()
