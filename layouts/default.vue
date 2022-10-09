<template>
  <div id="app" :class="dark ? 'dark' : 'light'">
    <div class="dark:bg-gray-800 dark:text-gray-200">
      <div class="content">
        <Header />
        <Nuxt />
        <Footer />
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
  @apply container mx-auto min-h-screen pt-5 grid dark:bg-gray-800 dark:text-gray-200;
  grid-template-rows: auto 1fr auto;
}
</style>
