// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],

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

  css: ['~/assets/css/main.css', '~/assets/css/loading.css'],

  ui: {
    fonts: false
  },

  runtimeConfig: {
    public: {
      API_BASE_URL: import.meta.env.NUXT_PUBLIC_API_BASE_URL,
      SERVER_SUCCESS_CODE: import.meta.env.NUXT_SERVER_SUCCESS_CODE,
      SERVER_REFRESH_TOKEN_URL: import.meta.env.NUXT_SERVER_REFRESH_TOKEN_URL,
      SERVER_LOGIN_URL: import.meta.env.NUXT_SERVER_LOGIN_URL,
      ACCESS_TOKEN_EXPIRED_CODE: import.meta.env.NUXT_ACCESS_TOKEN_EXPIRED_CODE
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
        prefix: 'local',
        dir: './app/assets/icons'
      }
    ]
  },

  image: { quality: 80, format: ['webp'], domains: ['nuxtjs.org'], dir: 'assets/icons-img' }
})
