<template>
  <NuxtLink
    to="/ui-ux"
    class="w-full bg-blue-200 text-gray-800 rounded-md py-8 px-6 flex flex-col justify-between transition hover:bg-blue-300"
  >
    <p class="text-3xl font-bold">UI/UX Design</p>
    <div class="flex justify-between items-end">
      <div>
        <p>10 books</p>
        <p>4 articles</p>
        <p>50 resources</p>
      </div>
      <UIUXIcon class="w-1/3" />
    </div>
  </NuxtLink>
</template>

<script>
import UIUXIcon from '~/components/svg/UIUX.vue'

export default {
  name: 'WebDesign',
  components: { UIUXIcon },
}
</script>
