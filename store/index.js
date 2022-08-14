export const state = () => ({
  dark: false,
  locales: [
    {
      code: 'ru',
      name: 'Русский'
    },
    {
      code: 'en',
      name: 'English'
    }
  ],
  locale: 'en'
})

export const getters = {
  dark: (state) => state.dark
}

export const mutations = {
  SET_DARK: (state, bool) => {
    state.dark = bool
  },
  SET_LANG(state, locale) {
    if (state.locales.find(el => el.code === locale)) {
      state.locale = locale
    }
  }
}
