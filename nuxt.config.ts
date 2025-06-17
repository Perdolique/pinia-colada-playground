export default defineNuxtConfig({
  compatibilityDate: '2025-06-17',

  future: {
    compatibilityVersion: 4
  },

  experimental: {
    viewTransition: true
  },

  modules: [
    '@pinia/nuxt',
    '@pinia/colada-nuxt'
  ],

  nitro: {
    preset: 'cloudflare_module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    },

    storage: {
      db: {
        driver: 'memory'
      }
    }
  },

  devtools: {
    enabled: true
  }
})
