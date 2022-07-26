<template>
  <div>
    <div class="flex flex-col justify-center items-center w-full lg:w-1/4">
      <PathLine class="h-14 lg:h-20" />
      <h2 class="text-2xl font-semibold my-2 lg:my-4 text-center">{{ title }}</h2>
    </div>
    <div
      v-for="(theme, id) in dataOfBlock"
      :key="id"
      class="border-b border-dashed last:border-0 px-4 lg:p-0"
    >
      <PathLineSmall
        class="w-full lg:w-1/4 flex items-center mt-2 lg:mt-5"
        :class="id === 0 ? 'mt-0' : ''"
      />
      <div class="flex flex-col lg:flex-row items-center">
        <div class="flex flex-col items-center w-full lg:w-1/4">
          <div
            class="bg-blue-100 text-gray-900 mt-5 mb-2 lg:my-5 w-full py-3 leading-6 rounded text-lg font-semibold text-center"
          >
            {{ theme.category }}
          </div>
        </div>
        <div class="w-full lg:w-3/4 flex flex-col lg:flex-row items-start overflow-auto lg:overflow-x-auto pt-0 pb-4 lg:py-5">
          <div
            v-for="(item, i) in theme.themes"
            :key="i"
            class="bg-blue-600 text-white mx-auto lg:ml-6 lg:mr-0 mt-4 lg:mt-0 py-2 rounded w-5/6 lg:w-52 text-sm text-center flex-shrink-0 cursor-pointer border border-transparent transition ease-in hover:text-blue-600 hover:bg-transparent hover:border-blue-600"
            :class="i === 0 ? 'mt-0' : ''"
            @click="open(item)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <PathLineSmall
        v-if="id !== dataOfBlock.length - 1"
        class="w-full lg:w-1/4 flex items-center mb-2 lg:mb-5"
      />
    </div>
  </div>
</template>

<script>
import PathLine from '@/components/svg/Path.vue'
import PathLineSmall from '@/components/svg/PathSmall.vue'

export default {
  name: 'BlockOfContent',
  components: { PathLine, PathLineSmall },
  props: {
    title: {
      type: String,
      default: '',
    },
    dataOfBlock: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    open(item) {
      this.$emit('open', item)
    }
  }
}
</script>
