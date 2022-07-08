<template>
  <NuxtLink
    to="/product"
    class="w-full bg-purple-500 text-white rounded py-8 px-6 flex flex-col justify-between relative"
    event=""
  >
    <div
      class="absolute bg-opacity-40 bg-slate-400 z-10 top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center"
    >
      <svg
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
      >
        <path
          d="M71.25 37.5H75C75.9946 37.5 76.9484 37.8951 77.6517 38.5984C78.3549 39.3016 78.75 40.2554 78.75 41.25V78.75C78.75 79.7446 78.3549 80.6984 77.6517 81.4017C76.9484 82.1049 75.9946 82.5 75 82.5H15C14.0054 82.5 13.0516 82.1049 12.3483 81.4017C11.6451 80.6984 11.25 79.7446 11.25 78.75V41.25C11.25 40.2554 11.6451 39.3016 12.3483 38.5984C13.0516 37.8951 14.0054 37.5 15 37.5H18.75V33.75C18.75 30.3028 19.429 26.8894 20.7482 23.7046C22.0673 20.5198 24.0009 17.626 26.4384 15.1884C28.876 12.7509 31.7698 10.8173 34.9546 9.49816C38.1394 8.17898 41.5528 7.5 45 7.5C48.4472 7.5 51.8606 8.17898 55.0454 9.49816C58.2302 10.8173 61.124 12.7509 63.5616 15.1884C65.9991 17.626 67.9327 20.5198 69.2518 23.7046C70.571 26.8894 71.25 30.3028 71.25 33.75V37.5ZM18.75 45V75H71.25V45H18.75ZM41.25 52.5H48.75V67.5H41.25V52.5ZM63.75 37.5V33.75C63.75 28.7772 61.7746 24.0081 58.2583 20.4917C54.7419 16.9754 49.9728 15 45 15C40.0272 15 35.2581 16.9754 31.7417 20.4917C28.2254 24.0081 26.25 28.7772 26.25 33.75V37.5H63.75Z"
          fill="white"
        />
      </svg>
      <p class="text-2xl font-semibold">Скоро!</p>
    </div>
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
