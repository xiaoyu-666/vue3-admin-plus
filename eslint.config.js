import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import oxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  { ignores: ['node_modules', 'dist', '.history', '.husky'] },
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      'vue/multi-word-component-names': 'off',
    },
  },
  ...vueTsEslintConfig(),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  oxlint.configs['flat/recommended'],
  skipFormatting,
]
