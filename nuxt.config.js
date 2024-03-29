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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/css/main.css'],
  plugins: [
    '~/plugins/v-click-outside.js',
    { src: '~/plugins/vue-bottom-sheet.js', ssr: false }
  ],
  build: { vendor: ['vue-i18n'] },
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/i18n', '@nuxtjs/google-analytics', '@nuxtjs/google-gtag'],
  i18n: {
    strategy: 'no_prefix',
    locales: ['uk', 'ru', 'en', 'fr', 'ko'],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        uk: require('./locales/uk.json'),
        ru: require('./locales/ru.json'),
        en: require('./locales/en.json'),
        fr: require('./locales/fr.json'),
        ko: require('./locales/ko.json')
      },
    },
  },
  googleAnalytics: {
    // eslint-disable-next-line require-await
    asyncID: async () => {
      return 'UA-237134601-1'
    },
    autoTracking: {
      screenview: true
    }
  },
  'google-gtag': {
    id: 'G-X0B97WG7HM'
  }
}
