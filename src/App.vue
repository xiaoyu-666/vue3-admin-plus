<template>
  <vab-app />
</template>
<script setup lang="ts">
  import DisableDevtool from 'disable-devtool'
  import config from '@/config/index'
  const { noDebugger } = config
  const route = useRoute()
  defineOptions({
    name: 'App',
  })
  onMounted(() => {
    // 是否允许生产环境进行代码调试，请前往config/cli.config.ts文件配置
    setTimeout(() => {
      if (
        !location.hostname.includes('127') &&
        !location.hostname.includes('localhost') &&
        (location.hostname.includes('beautiful') ||
          location.hostname.includes('vuejs-core') ||
          noDebugger) &&
        route.query &&
        route.query.debugger !== 'auto'
      ) {
        DisableDevtool()
      }
    }, 500)
  })
</script>

<style lang="scss">
  // 此处样式无任何用处，只为生效全局自动样式
  .app {
    margin: 0;
  }
</style>
