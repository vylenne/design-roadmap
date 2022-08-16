<template>
  <div id="app" class="h-full" :class="dark ? 'dark' : 'light'">
    <div class="dark:bg-gray-800 dark:text-gray-200 pt-5">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/HeaderComponent.vue'

export default {
  components: { Header },
  computed: {
    ...mapGetters(['dark']),
  },
}
</script>
