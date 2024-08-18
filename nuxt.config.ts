// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  runtimeConfig: {
    public: {
      axiosBaseUrl: process.env.API_BASE_URL,
    }
  },
  modules: [
      "@nuxt/ui",
      "@nuxtjs/i18n",
      "@pinia/nuxt",
  ],
  plugins: [
    '~/plugins/axios',
    '~/plugins/toast.js',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
      locales: ['en', 'ar'],
      defaultLocale: 'en',
  },

})