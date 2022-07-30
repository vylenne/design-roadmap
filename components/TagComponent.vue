<template>
  <div class="text-center py-1 rounded-lg text-sm font-medium h-fit" :class="typeClass">
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
          return 'bg-blue-50 text-blue-700'
        case 2:
          return 'bg-indigo-50 text-indigo-700'
        case 3:
          return 'bg-orange-50 text-orange-700'
        default:
          return 'bg-gray-50 text-gray-700'
      }
    },
  },
}
</script>
