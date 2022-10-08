<template>
  <div id="app" class="h-full" :class="dark ? 'dark' : 'light'">
    <div class="dark:bg-gray-800 dark:text-gray-200 pt-5 h-full">
      <div class="dark:bg-gray-800 dark:text-gray-200">
        <div class="content">
          <Header />
          <Nuxt />
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  components: { Header, Footer },
  computed: {
    ...mapGetters(['dark']),
  },
}
</script>

<style scoped>
.content {
  @apply container !w-full mx-auto min-h-full grid;
  grid-template-rows: auto 1fr auto;
}
</style>
