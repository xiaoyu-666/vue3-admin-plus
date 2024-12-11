import { setupVab } from '~/library'
import { setupI18n } from '@/i18n'
import { setupStore } from '@/stores'
import { setupRouter } from '@/router'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
setupVab(app)
setupI18n(app)
setupStore(app)
setupRouter(app)
  .isReady()
  .then(() => app.mount('#app'))
