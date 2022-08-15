<template>
  <header
    class="bg-white dark:bg-gray-700 px-4 py-2 lg:px-10 lg:py-3 rounded-md flex justify-between items-center mb-4 mx-auto w-full max-w-4xl"
  >
    <div class="flex items-center">
      <back-to-main v-if="$nuxt.$route.path !== '/' && $nuxt.$route.path !== `/${$i18n.locale}`" class="mr-4" />
      <button
        class="bg-gray-800 text-white w-40 lg:w-auto text-sm lg:text-base rounded-full py-2 px-2 lg:px-4 mr-2 lg:mr-4 hover:bg-gray-900 dark:text-gray-300 hover:shadow-lg"
      >
        {{ $t('support') }}
      </button>
      <a
        class="hover:underline rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        href="https://t.me/vylenne"
        target="_blank"
      >
        <Telegram />
      </a>
    </div>
    <div class="flex items-center">
      <theme-switcher class="mr-2 lg:mr-6" />
      <language-menu class="text-sm lg:text-base" />
    </div>
  </header>
</template>
<script>
import Telegram from './svg/Telegram.vue'
import LanguageMenu from './LanguageMenu.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
import BackToMain from './BackToMain.vue'

export default {
  name: 'HeaderComponent',
  components: { Telegram, LanguageMenu, ThemeSwitcher, BackToMain },
}
</script>
