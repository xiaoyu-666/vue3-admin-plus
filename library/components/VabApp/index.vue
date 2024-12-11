<template>
  <el-config-provider
    :button="{
      autoInsertSpace: true,
    }"
    :locale="locale"
  >
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
  import { enLocale, zhLocale } from '@/i18n'

  const route = useRoute()
  const { locale: language } = useI18n()
  const locale = computed(() => (language.value === 'en' ? enLocale : zhLocale))
</script>
<style lang="scss"></style>
