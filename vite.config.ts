// 导入自定义配置
import config from './src/config'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'

console.log(config)

const { base, devPort, outDir, assetsDir, reportCompressedSize } = config
// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue(), vueJsx(), vueDevTools()],
    envDir: 'env',
    envPrefix: 'VITE_',
    base,
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
    build: {
      outDir,
      assetsDir,
      reportCompressedSize,
    },
  }
})
