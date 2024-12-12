// 引入element-plus图标和样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //引入图标
import 'element-plus/dist/index.css' //引入样式
import type { App } from 'vue'
import '@vab/styles/index.scss'

export function setupVab(app: App<Element>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
