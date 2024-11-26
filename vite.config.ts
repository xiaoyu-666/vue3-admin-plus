import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'
// 导入自定义配置
import cli_config from './src/config'
import { resolve } from 'node:path'

const { devPort } = cli_config
// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue(), vueJsx(), vueDevTools()],
    envDir: 'env',
    envPrefix: 'VITE_',
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('.', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        // '@': resolve(__dirname, './src'),
      },
    },
    server: {
      strictPort: true,
      port: devPort,
      open: true,
    },
  }
})
