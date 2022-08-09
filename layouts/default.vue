<template>
  <div id="app" class="h-full" :class="dark ? 'dark' : 'light'">
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['dark']),
  },
}
</script>
