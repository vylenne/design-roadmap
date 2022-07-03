<template>
  <NuxtLink
    to="/product"
    class="w-full bg-purple-500 text-white rounded py-8 px-6 flex flex-col justify-between cursor-pointer"
  >
    <p class="text-3xl font-bold">Product design</p>
    <div class="flex justify-between text-white items-end">
      <div>
        <p>10 books</p>
        <p>4 articles</p>
        <p>50 resources</p>
      </div>
      <Product class="w-1/2" />
    </div>
  </NuxtLink>
</template>

<script>
import Product from '~/components/svg/Product.vue'

export default {
  name: 'ProductDesign',
  components: { Product },
}
</script>
