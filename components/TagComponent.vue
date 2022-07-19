<template>
  <div class="text-center w-24 py-1 rounded-lg text-white text-sm h-fit" :class="typeClass">
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
          return 'bg-blue-500'
        case 2:
          return 'bg-indigo-500'
        case 3:
          return 'bg-orange-500'
        default:
          return 'bg-gray-500'
      }
    },
  },
}
</script>
