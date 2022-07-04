<template>
  <div class="flex items-center justify-center bg-blue-100 text-gray-900 my-5 w-1/4 py-3 leading-6 rounded text-lg font-semibold">
    {{ theme }}
  </div>
</template>

<script>
export default {
  name: 'CategoryOfContent',
  props: {
    theme: {
      type: String,
      default: ''
    }
  },
}
</script>
