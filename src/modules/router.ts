import type { App } from 'vue'
import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router/auto'
import NProgress from 'nprogress'

export const router: Router = createRouter({
  history: createWebHistory(),
})

router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
