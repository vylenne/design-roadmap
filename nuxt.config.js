export default {
  ssr: true,
  target: 'static',
  head: {
    title: 'Design roadmap',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Design roadmap 2022 helps you to start from zero to hero in any direction you want.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['@/assets/css/main.css'],
  // modules: ['@nuxtjs/i18n'],
  // i18n: {
  //   locales: [
  //     {
  //       code: 'en',
  //       name: 'English'
  //     },
  //     {
  //       code: 'ru',
  //       name: 'Русский'
  //     }
  //   ],
  //   defaultLocale: 'en',
  //   vueI18n: {
  //     messages: {
  //       'ru': require('./locales/ru.json'),
  //       'en': require('./locales/en.json')
  //     }
  //   }
  // },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js', { src: '~/plugins/vue-bottom-sheet.js', ssr: false }],
  build: { vendor: ['vue-i18n'] },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'G-FNX1Z1GSEE',
    autoTracking: {
      screenview: true
    }
  }
}
