<template>
  <div
    class="w-full bg-blue-600 text-white rounded py-8 px-6 flex flex-col justify-between cursor-pointer"
  >
    <p class="text-3xl font-bold">UI/UX Design</p>
    <div class="flex justify-between text-white items-end">
      <div>
        <p>10 books</p>
        <p>4 articles</p>
        <p>50 resources</p>
      </div>
      <UIUXIcon class="w-1/2" />
    </div>
  </div>
</template>

<script>
import UIUXIcon from '~/components/svg/UIUX.vue'

export default {
  name: 'WebDesign',
  components: { UIUXIcon },
}
</script>
