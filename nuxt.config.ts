// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  app: {
    head: {
      htmlAttrs: { dir: 'ltr', lang: 'en' },
    },
  },
  runtimeConfig: {
    public: {
      axiosBaseUrl: process.env.API_BASE_URL,
      hostUrl: process.env.HOST_URL,
      clientUrl:process.env.CLIENT_URL,
      PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
      PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER,
    }
  },
  modules: [
      "@nuxt/ui",
      "@nuxtjs/i18n",
      "@pinia/nuxt",
  ],
  plugins: [
    '~/plugins/axios',
    '~/plugins/toast',
    '~/plugins/auth',
    '~/plugins/pusher'
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
      locales: ['en', 'ar'],
      defaultLocale: 'en',
  },

})