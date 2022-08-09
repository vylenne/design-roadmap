<template>
  <div
    class="text-center py-1 rounded-lg text-sm font-medium h-fit dark:text-gray-100"
    :class="typeClass"
  >
    {{ typeOfResource }}
  </div>
</template>

<script>
export default {
  name: 'TagComponent',
  props: {
    typeOfResource: {
      type: String,
      default: 'article',
    },
    typeId: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    typeClass() {
      switch (this.typeId) {
        case 1:
          return 'bg-blue-50 text-blue-700 dark:bg-blue-600 dark:bg-opacity-80'
        case 2:
          return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-600 dark:bg-opacity-80'
        case 3:
          return 'bg-orange-50 text-orange-700 dark:bg-orange-600 dark:bg-opacity-80'
        default:
          return 'bg-gray-50 text-gray-700 dark:bg-gray-600 dark:bg-opacity-60'
      }
    },
  },
}
</script>
