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
//图片压缩插件
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
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
      '@vab': fileURLToPath(new URL('./library', import.meta.url)),
      '/#': fileURLToPath(new URL('./types', import.meta.url)),
      //'@vab': resolve(__dirname, 'library'),
      // '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
        {
          axios: [['default', 'axios']],
        },
      ],
      dts: 'library/build/vuePlugins/auto-imports.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'library/build/vuePlugins/components.d.ts',
    }),
    {
      ...viteCompression(),
      apply: true,
      verbose: true, // 是否在控制台中输出压缩结果
      disable: false,
      threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
      algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
      ext: '.gz',
      deleteOriginFile: false, // 源文件压缩后是否删除
    },
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: 'visualizer.html', //分析图生成的文件名
      open: false, //如果存在本地服务端口，将在打包后自动展示
    }),
    ViteImageOptimizer(),
  ],
  server: {
    strictPort: true,
    port: devPort,
    open: true,
  },
  build: {
    target: 'es2015',
    outDir,
    assetsDir,
    reportCompressedSize,
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash:15].js',
        entryFileNames: 'static/js/[name]-[hash:15].js',
        assetFileNames: 'static/[ext]/[name]-[hash:15].[ext]',
        // manualChunks: {
        //   vue: ['vue', 'pinia', 'vue-router'],
        //   elementIcons: ['@element-plus/icons-vue'],
        // },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
      // external: ['vue', 'element-plus'],
    },
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true,
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
