<template>
  <div>
    <header
      class="bg-white dark:bg-gray-700 px-4 py-2 lg:px-10 lg:py-3 rounded-md flex justify-between items-center lg:mb-4 mx-4 lg:mx-auto w-auto lg:w-full max-w-4xl"
    >
      <div class="flex items-center">
        <back-to-main v-if="$nuxt.$route.path !== '/' && $nuxt.$route.path !== `/${$i18n.locale}`" class="mr-4 hidden md:block" />
        <button
          class="bg-gray-800 text-white w-40 lg:w-auto text-sm lg:text-base rounded-full py-2 px-2 lg:px-4 md:mr-4 transition dark:text-gray-300 hover:shadow-md hover:shadow-gray-300"
          @click="openModal"
        >
          {{ $t('support') }}
        </button>
        <a
          class="hover:underline rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 hidden md:block"
          href="https://t.me/vylenne"
          target="_blank"
        >
          <Telegram />
        </a>
      </div>
      <div class="flex items-center">
        <theme-switcher class="md:mr-6" />
        <language-menu class="text-sm lg:text-base" />
      </div>
    </header>
    <modal-component v-show="open" @close-modal="closeModal" />
  </div>
</template>
<script>
import Telegram from './svg/Telegram.vue'
import LanguageMenu from './LanguageMenu.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
import BackToMain from './BackToMain.vue'
import ModalComponent from './ModalComponent.vue'

export default {
  name: 'HeaderComponent',
  components: { Telegram, LanguageMenu, ThemeSwitcher, BackToMain, ModalComponent },
  data() {
    return {
      open: false
    }
  },
  methods: {
    openModal() {
      this.open = true
    },
    closeModal() {
      this.open = false
    }
  },
}
</script>
