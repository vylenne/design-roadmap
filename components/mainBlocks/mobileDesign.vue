<template>
  <NuxtLink
    to="/mobile"
    class="w-full bg-red-500 text-white rounded py-8 px-6 flex flex-col justify-between cursor-pointer"
  >
    <p class="text-3xl font-bold">Mobile design</p>
    <div class="flex justify-between text-white items-end">
      <div>
        <p>10 books</p>
        <p>4 articles</p>
        <p>50 resources</p>
      </div>
      <Mobile class="w-1/2" />
    </div>
  </NuxtLink>
</template>

<script>
import Mobile from '~/components/svg/Mobile.vue'

export default {
  name: 'MobileDesign',
  components: { Mobile },
}
</script>
