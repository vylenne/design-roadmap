<template>
  <div class="min-h-full h-full container mx-auto py-10 flex flex-col">
    <h1 class="text-4xl font-bold">{{ data.title }}</h1>
    <p class="mt-6 mb-10">
      {{ data.description }}
    </p>
    <div>
      <div class="flex flex-col justify-center items-center w-1/4">
        <PathLine class="h-20" />
        <h2 class="text-3xl font-bold my-4">{{ data.content[0].title }}</h2>
        <PathLineSmall />
      </div>
      <div class="flex">
        <CategoryOfContent :theme="data.content[0].content[0].category" />
      </div>
    </div>
  </div>
</template>

<script>
import PathLine from '@/components/svg/Path.vue'
import PathLineSmall from '@/components/svg/PathSmall.vue'
import CategoryOfContent from '@/components/CategoryOfContent/index.vue'
import data from '~/content/pages/uiux.json'

export default {
  name: 'UiUxDesign',
  components: { PathLine, PathLineSmall, CategoryOfContent },
  data() {
    return {
      data,
    }
  }
}
</script>
