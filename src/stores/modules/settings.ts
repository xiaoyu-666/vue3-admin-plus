/**
 * @description 所有全局配置的状态管理，如无必要请勿修改
 */
import type { SettingsModuleType } from '/#/store'
import config from '@/config'
import { isJson } from '@/utils/validate'
const {
  abbreviation,
  logo,
  title,
  background,
  columnStyle,
  fixedHeader,
  foldSidebar,
  i18n,
  layout,
  menuWidth,
  showFullScreen,
  showLanguage,
  showLock,
  showNotice,
  showPageTransition,
  showProgressBar,
  showRefresh,
  showSearch,
  showTabs,
  showTabsIcon,
  showTheme,
  showThemeSetting,
  tabsBarStyle,
  themeName,
} = config

const defaultTheme: ThemeType = {
  layout,
  themeName,
  background,
  columnStyle,
  fixedHeader,
  foldSidebar,
  menuWidth,
  showProgressBar,
  showTabs,
  showTabsIcon,
  showLanguage,
  showRefresh,
  showSearch,
  showTheme,
  showNotice,
  showFullScreen,
  showThemeSetting,
  showPageTransition,
  showLock,
  tabsBarStyle,
}
const getLocalStorage = (key: string) => {
  const value: string | null = localStorage.getItem(key)
  return value && isJson(value) ? JSON.parse(value) : false
}

const theme = getLocalStorage('theme') || { ...defaultTheme }
const { collapse = foldSidebar } = getLocalStorage('collapse')
const { language = i18n } = getLocalStorage('language')
const { lock = false } = getLocalStorage('lock')
const { logo: _3logo } = getLocalStorage('logo')
const { title: _3title } = getLocalStorage('title')
const { abbreviation: _3abbreviation } = getLocalStorage('abbreviation')

export const useSettingsStore = defineStore('settings', {
  state: (): SettingsModuleType => ({
    theme,
    device: 'desktop',
    collapse,
    language,
    lock,
    logo,
    title,
    abbreviation,
  }),
  getters: {
    getTheme: (state) => state.theme,
    getDevice: (state) => state.device,
    getCollapse: (state) => state.collapse,
    getLanguage: (state) => state.language,
    getLock: (state) => state.lock,
    getLogo: (state) => state.logo,
    getTitle: (state) => state.title,
    getAbbreviation: (state) => state.abbreviation,
  },
  actions: {
    updateState(obj: any) {
      Object.getOwnPropertyNames(obj).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this[key] = obj[key]
        localStorage.setItem(
          key,
          typeof obj[key] == 'string'
            ? `{"${key}":"${obj[key]}"}`
            : `{"${key}":${obj[key]}}`
        )
      })
    },
    saveTheme() {
      localStorage.setItem('theme', JSON.stringify(this.theme))
    },
    resetTheme() {
      this.theme = { ...defaultTheme }
      localStorage.removeItem('theme')
      this.updateTheme()
    },
    updateTheme() {
      //主题更新样式
      // const index = this.theme.themeName.indexOf('-')
      // const themeName =
      //   this.theme.themeName.slice(0, Math.max(0, index)) || 'blue'
      // let variables = require(
      //   `@vab/styles/variables/vab-${themeName}-variables.module.scss`
      // )
      // if (variables.default) variables = variables.default
      // Object.keys(variables).forEach((key) => {
      //   if (key.startsWith('vab-')) {
      //     useCssVar(key.replace('vab-', '--el-'), ref(null)).value =
      //       variables[key]
      //   }
      // })
      // const menuBackground =
      //   this.theme.themeName.split('-')[1] || this.theme.themeName
      // document.querySelectorAll('body')[0].className =
      //   `vab-theme-${menuBackground}`
      // if (this.theme.background !== 'none')
      //   document
      //     .querySelectorAll('body')[0]
      //     .classList.add(this.theme.background)
      // const el = ref(null)
      // if (this.theme.menuWidth && this.theme.menuWidth.endsWith('px'))
      //   useCssVar('--el-left-menu-width', el).value = this.theme.menuWidth
      // else useCssVar('--el-left-menu-width', el).value = '266px'
    },
    toggleCollapse() {
      this.collapse = !this.collapse
      localStorage.setItem('collapse', `{"collapse":${this.collapse}}`)
    },
    toggleDevice(device: string) {
      this.updateState({ device })
    },
    openSideBar() {
      this.updateState({ collapse: false })
    },
    foldSideBar() {
      this.updateState({ collapse: true })
    },
    changeLanguage(language: string) {
      this.updateState({ language })
    },
    handleLock() {
      this.updateState({ lock: true })
    },
    handleUnLock() {
      this.updateState({ lock: false })
    },
    changeLogo(logo: string) {
      this.updateState({ logo })
    },
    changeTitle(title: string) {
      this.updateState({ title })
    },
  },
})
