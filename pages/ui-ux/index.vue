<template>
  <div class="pt-6 dark:bg-gray-800 dark:text-gray-200">
    <div class="container mx-auto min-h-full h-auto flex flex-col">
      <Header />
      <h1 class="text-4xl font-semibold px-4 lg:p-0 dark:text-gray-300">
        {{ $t('uiux.title') }}
      </h1>
      <p class="my-4 lg:mt-6 lg:mb-8 w-full lg:w-3/4 px-4 lg:p-0 dark:text-gray-300">
        {{ $t('uiux.description') }}
      </p>
      <div v-for="(block, id) in $t('uiux.categories')" :key="id">
        <BlockOfContent :id="id" :title="block.title"
          :data-of-block="block" @open="open($event)" />
      </div>
      <h2 class="text-lg lg:text-xl font-medium my-4 px-4 lg:p-0">
        {{ $t('practice') }}
      </h2>
      <Footer />
      <Popup :id="$t('uiux.id')" ref="wrapper" :resource="resource" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue'
import BlockOfContent from '@/components/BlockOfContent.vue'
import Footer from '@/components/FooterComponent.vue'
import Popup from '@/components/PopupComponent.vue'

import data from '@/locales/ru.json'

export default {
  name: 'UiUxDesign',
  components: { BlockOfContent, Footer, Popup, Header },
  data() {
    return {
      data,
      resource: null,
    }
  },
  methods: {
    open(category) {
      const resource = data.content.filter((item) => item.category === category)
      this.resource = resource[0] ?? {}
      this.$refs.wrapper.$refs.popup.open()
    },
  },
}
</script>
