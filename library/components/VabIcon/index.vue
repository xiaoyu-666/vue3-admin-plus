<template>
  <i v-if="!props.isCustomSvg" :class="icon" aria-hidden="true"></i>
  <svg v-else aria-hidden="true">
    <use :xlink:href="icon"></use>
  </svg>
</template>
<script setup lang="ts">
  // import './fonts/remixicon.css'
  //todo 菜单动态渲染
  const props = defineProps({
    icon: {
      type: String,
      default: () => {
        return ''
      },
    },
    isCustomSvg: {
      type: Boolean,
      default: () => {
        return false
      },
    },
  })

  const icon = computed(() => {
    return props.isCustomSvg ? `#icon-${props.icon}` : `ri-${props.icon}`
  })
</script>
<style lang="scss" scoped></style>
