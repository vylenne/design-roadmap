<template>
  <div class="flex relative cursor-pointer" tabindex="0" @blur="open = false">
    <div
      class="text-gray-700 dark:text-gray-300 rounded w-28 lg:w-32 py-2 focus:outline-none flex items-center justify-center"
      @click="open = !open">
      <span> {{ $t('language') }}</span>
      <Arrow class="transition h-5 w-5" :class="open ? '-rotate-90' : 'rotate-90'" />
    </div>
    <div
      class="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-md rounded-b-md overflow-hidden absolute mt-12 top-1 z-20 text-center"
      :class="{ hidden: !open }">
      <div
        v-for="lang in locales"
        :key="lang.code"
        class="flex justify-center w-32 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 no-underline hover:no-underline"
        @click="switchLanguage(lang.code)">
        {{ lang.name }}
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from './svg/Arrow.vue'

export default {
  name: 'LanguageMenu',
  components: { Arrow },
  data() {
    return {
      open: false
    }
  },
  computed: {
    locales() { return this.$store.state.locales }
  },
  methods: {
    switchLanguage(lang) {
      document.cookie = `locale=${lang}`
      this.open = false
      location.reload()
    },
  },
}
</script>
