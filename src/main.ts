import { setupVab } from '~/library'
import { setupStore } from '@/stores'
import { setupRouter } from '@/router'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
setupVab(app)
setupStore(app)
setupRouter(app)
  .isReady()
  .then(() => app.mount('#app'))
