<template>
  <NuxtLink
    to="/ui-ux"
    class="w-full bg-blue-200 text-gray-800 rounded-md p-4 lg:py-8 lg:px-6 flex flex-col justify-between transition hover:bg-blue-300"
  >
    <p class="text-2xl lg:text-3xl font-bold">UI/UX Design</p>
    <div class="flex justify-end items-end">
      <UIUXIcon class="w-1/3 h-20 lg:h-auto" />
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
