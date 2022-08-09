<template>
  <button
    class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-2 h-fit"
    @click="toggleDarkMode"
  >
    <Moon v-if="dark" class="h-6 w-6" />
    <Sun v-else class="h-6 w-6" />
  </button>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import Sun from './svg/Sun.vue'
import Moon from './svg/Moon.vue'

export default {
  components: { Sun, Moon },
  computed: {
    ...mapGetters(['dark']),
  },
  mounted() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.SET_DARK(true)
    } else {
      this.SET_DARK(false)
    }
  },
  methods: {
    ...mapMutations(['SET_DARK']),
    toggleDarkMode() {
      this.SET_DARK(!this.dark)
      this.dark
        ? localStorage.setItem('theme', 'dark')
        : localStorage.setItem('theme', 'light')
    },
  },
}
</script>
