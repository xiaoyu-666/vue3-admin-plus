// 引入element-plus图标和样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //引入图标
import 'element-plus/dist/index.css' //引入样式
import type { App } from 'vue'

// todo 引入css全局样式，后期去掉
import '~/library/styles/main.css'

export function setupVab(app: App<Element>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
