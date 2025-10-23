// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image'
  ],
  devtools: {
    enabled: true
  },

  app: {
    baseURL: import.meta.env.NUXT_APP_BASE_URL || '/',

    head: {
      title: 'The website title',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  },

  css: ['~/assets/css/main.css'],

  ui: {
    fonts: false
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: import.meta.env.NUXT_PUBLIC_API_BASE_URL
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify',
    customCollections: [
      {
        prefix: 'ai',
        dir: './app/assets/icons'
      }
    ]
  },

  image: { quality: 80, format: ['webp'], domains: ['nuxtjs.org'], dir: 'assets/icons-img' }

})
