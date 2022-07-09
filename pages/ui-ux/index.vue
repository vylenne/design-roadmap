<template>
  <div class="min-h-full h-full container mx-auto py-10 flex flex-col relative">
    <BackToMain />
    <h1 class="text-4xl font-semibold">{{ data.title }}</h1>
    <p class="mt-6 mb-8 w-3/4">
      {{ data.description }}
    </p>
    <div v-for="(block, id) in data.content" :key="id">
      <BlockOfContent :title="block.title" :data-of-block="block.content"/>
    </div>
    <h2 class="text-xl font-medium my-4">
      Все в ваших руках. Нарабатывайте практику и будет вам счастье!:)
    </h2>
    <Footer />
  </div>
</template>

<script>
import BlockOfContent from '@/components/BlockOfContent/index.vue'
import BackToMain from '@/components/BackToMain.vue'
import Footer from '@/components/FooterComponent.vue'
import data from '@/content/pages/uiuxMain.json'

export default {
  name: 'UiUxDesign',
  components: { BlockOfContent, BackToMain, Footer },
  data() {
    return {
      data,
    }
  },
}
</script>
