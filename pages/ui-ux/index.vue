<template>
  <div class="min-h-full h-auto container mx-auto pt-6 lg:pt-10 px-0 flex flex-col relative">
    <BackToMain />
    <h1 class="text-4xl font-semibold px-4 lg:p-0">{{ data.title }}</h1>
    <p class="my-4 lg:mt-6 lg:mb-8 w-full lg:w-3/4 px-4 lg:p-0">
      {{ data.description }}
    </p>
    <div v-for="(block, id) in data.categories" :key="id">
      <BlockOfContent
        :title="block.title"
        :data-of-block="block.content"
        @open="open($event)"
      />
    </div>
    <h2 class="text-lg lg:text-xl font-medium my-4 px-4 lg:p-0">
      Все в ваших руках. Нарабатывайте практику и будет вам счастье!:)
    </h2>
    <Footer />
    <Popup :id="data.id" ref="wrapper" :resource="resource" />
  </div>
</template>

<script>
import BlockOfContent from '~/components/BlockOfContent.vue'
import BackToMain from '@/components/BackToMain.vue'
import Footer from '@/components/FooterComponent.vue'
import Popup from '@/components/PopupComponent.vue'

import data from '@/content/pages/uiux.json'

export default {
  name: 'UiUxDesign',
  components: { BlockOfContent, BackToMain, Footer, Popup },
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
