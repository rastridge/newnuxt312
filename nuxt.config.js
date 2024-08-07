// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,

  runtimeConfig: {
    API_SECRET: process.env.API_SECRET,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DATABASE_URL: process.env.DATABASE_URL,

    TO: process.env.TO,
    TO_FLAG: process.env.TO_FLAG,
    FROM: process.env.FROM,
    FROM_NAME: process.env.FROM_NAME,
    EE_API_KEY: process.env.EE_API_KEY,
    TWILIO_NUMBER: process.env.TWILIO_NUMBER,
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    SEASON_DIVIDE_DATE: process.env.SEASON_DIVIDE_DATE,

    // Keys within public, will be also be
    // exposed to the client-side
    public: {
      TO_REGISTERED_LIST: process.env.TO_REGISTERED_LIST.split(','),

      SEASON_DIVIDE_DT: process.env.SEASON_DIVIDE_DT,
      MEDIA_URL: process.env.MEDIA_URL,
      IMAGES_URL: process.env.IMAGES_URL,
      TITLE: process.env.TITLE,
      GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    },
  },

  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    'dayjs-nuxt',
    '@formkit/nuxt',
    '@nuxt/image',
    '@nuxt/eslint',
    'nuxt-gtag',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@stefanobartoletti/nuxt-social-share',
  ],

  primevue: {
    importPT: {
      from: './assets/pvpresets/primevue_preset.js',
    },
  },

  css: [
    // formkit
    '@/assets/sass/layout/themes/genesis/theme.css',
    // primevue
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
  ],

  dayjs: {
    locales: ['en', 'fr'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'America/New_York',
  },

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },

  eslint: {},

  gtag: {
    id: 'G-Z3NSP2KEHY',
  },

  components: [
    '~/components/app',
    '~/components/selectors',
    '~/components/forms',
    '~/components/displays',
    '~/components',
  ],

  compatibilityDate: '2024-07-05',
})
