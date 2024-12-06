// import pinia from '@/stores'
import { createI18n } from 'vue-i18n'
import type { LanguageType } from '/#/store'
import en from './locales/en.json'

const messages: Record<LanguageType, any> = {
  en: { ...en },
  zh: {},
}
export const i18n = createI18n({
  legacy: false,
  locale: '',
  fallbackLocale: 'zh',
  messages,
})
export function setupI18n(app: any) {
  app.use(i18n)
  return i18n
}
