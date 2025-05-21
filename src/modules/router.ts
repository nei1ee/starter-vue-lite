/* eslint-disable no-console */
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(),

  routes,
})

router.beforeEach((to, from) => {
  console.log('===>beforeEach', to, from)
})

router.afterEach(() => {
  console.log('===>afterEach')
})

// This will update routes at runtime without reloading the page
if (import.meta.hot) {
  handleHotUpdate(router)
}

export function setupRouter(app: App<Element>) {
  app.use(router)
}
