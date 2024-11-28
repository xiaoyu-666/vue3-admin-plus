import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'
//element-plus自动导入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//生成.gz文件插件
import viteCompression from 'vite-plugin-compression'
//打包视图插件（分析生成包大小）
import { visualizer } from 'rollup-plugin-visualizer'
// 导入系统自定义配置
import config from './src/config'
const { base, devPort, outDir, assetsDir, reportCompressedSize } = config
// https://vite.dev/config/
export default defineConfig({
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
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'library/build/vuePlugins/auto-imports.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'library/build/vuePlugins/components.d.ts',
    }),
    {
      ...viteCompression(),
      apply: true,
    },
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: 'test.html', //分析图生成的文件名
      open: true, //如果存在本地服务端口，将在打包后自动展示
    }),
  ],
  server: {
    strictPort: true,
    port: devPort,
    open: true,
  },
  build: {
    outDir,
    assetsDir,
    reportCompressedSize,
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          vue: ['vue', 'pinia', 'vue-router'],
          elementIcons: ['@element-plus/icons-vue'],
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/library/styles/index.scss" as *;`,
        api: 'modern-compiler',
      },
    },
  },
})
