import type { App } from 'vue'
import { PiniaColada } from '@pinia/colada'

export function setupPiniaColada(app: App<Element>) {
  app.use(PiniaColada, {})
}
