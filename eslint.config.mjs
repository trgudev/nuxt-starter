import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/html-self-closing': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-useless-catch': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'no-console': ['warn', { allow: ['error'] }],
    'vue/block-order': ['error', {
      order: [
        'script[setup]',
        'script',
        'template',
        'style'
      ]
    }]
  }
})
