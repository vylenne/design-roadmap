<template>
  <div class="pt-6 dark:bg-gray-800 dark:text-gray-200">
    <div class="container mx-auto min-h-full h-auto flex flex-col">
      <h1 class="text-4xl font-semibold px-4 lg:p-0 dark:text-gray-300">
        {{ $t('uiux.title') }}
      </h1>
      <p class="my-4 lg:mt-6 lg:mb-8 w-full lg:w-3/4 px-4 lg:p-0 dark:text-gray-300">
        {{ $t('uiux.description') }}
      </p>
      <div v-for="(block, i) in $t('uiux.categories')" :key="i">
        <BlockOfContent :title="$t(`uiux.categories.${i}.title`)" :data-of-block="$t(`uiux.categories.${i}.content`)"
          @open="open($event)" />
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
import BlockOfContent from '@/components/BlockOfContent.vue'
import Footer from '@/components/FooterComponent.vue'
import Popup from '@/components/PopupComponent.vue'

export default {
  name: 'UiUxDesign',
  components: { BlockOfContent, Popup, Footer },
  data() {
    return {
      resource: null,
    }
  },
  methods: {
    open(category) {
      const resource = this.$i18n.t(`uiux.content`).filter((item) => item.category === category)
      this.resource = resource[0] ?? {}
      this.$refs.wrapper.$refs.popup.open()
    },
  },
}
</script>
