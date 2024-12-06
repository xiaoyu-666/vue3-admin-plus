import { VabRouteMeta, VabRouteRecord } from '/#/router'

declare interface DataStoreModuleType {
  roleList: any[]
  departmentList: any[]
  postList: any[]
}

declare interface AclModuleType {
  admin: boolean
  role: string[]
  permission: string[]
}

declare interface ErrorLogModuleType {
  errorLogs: any[]
}

declare interface RoutesModuleType {
  tab: {
    data: string | undefined
  }
  tabMenu: string | undefined
  activeMenu: {
    data: string | undefined
  }
  routes: VabRouteRecord[]
}

declare type DeviceType = 'mobile' | 'desktop'
declare type LanguageType = 'zh' | 'en'

declare interface SettingsModuleType {
  theme: ThemeType
  device: DeviceType
  collapse: boolean
  language: LanguageType
  lock: boolean
  logo: string
  title: string
  abbreviation: string
  echartsGraphic1: string[]
  echartsGraphic2: string[]
  echartsGraphic3: string[]
  echartsGraphic4: string[]
  echartsGraphic5: string[]
  echartsGraphic6: string[]
}

declare interface TabsModuleType {
  visitedRoutes: VabRouteRecord[]
}

declare interface OptionType {
  name?: string
  title?: string
  meta: VabRouteMeta
}

declare interface UserModuleType {
  token: string | boolean
  username: string
  avatar: string
  realname: string
  dpt_name: string
  dpt_number: string | number
  teller_id: string | number
  sessionId: string | number
}
