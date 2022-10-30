<template>
  <div class="pt-6">
    <div class="container mx-auto min-h-full h-auto flex flex-col">
      <h1 class="text-4xl font-semibold px-4 lg:p-0 dark:text-gray-300">
        {{ $t('mobile.title') }}
      </h1>
      <p class="my-4 lg:mt-6 lg:mb-8 w-full lg:w-3/4 px-4 lg:p-0 dark:text-gray-300">
        {{ $t('mobile.description') }}
      </p>
      <div v-for="(block, i) in $t('mobile.categories')" :key="i">
        <BlockOfContent :title="$t(`mobile.categories.${i}.title`)" :data-of-block="$t(`mobile.categories.${i}.content`)"
          @open="open($event)" />
      </div>
      <h2 class="text-lg lg:text-xl font-medium my-4 px-4 lg:p-0">
        {{ $t('practice') }}
      </h2>
      <Popup :id="$t('mobile.id')" ref="wrapper" :resource="resource" />
    </div>
  </div>
</template>

<script>
import BlockOfContent from '@/components/BlockOfContent.vue'
import Popup from '@/components/PopupComponent.vue'

export default {
  name: 'MobileDesign',
  components: { BlockOfContent, Popup },
  data() {
    return {
      resource: null,
    }
  },
  methods: {
    open(category) {
      const resource = this.$i18n
        .t(`mobile.content`)
        .filter((item) => item.category === category)
      this.resource = resource[0] ?? {}
      this.$refs.wrapper.$refs.popup.open()
    },
  }
}
</script>
