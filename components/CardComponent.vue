<template>
  <NuxtLink
    :to="direction.link"
    class="w-full rounded-md p-4 pb-10 lg:pt-8 lg:pb-16 lg:px-6 transition relative"
    :class="[direction.color, { 'pointer-events-none': direction.blocked }]"
  >
    <div
      v-if="direction.blocked"
      class="absolute rounded-md bg-opacity-50 bg-gray-500 text-white z-10 top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center"
    >
      <svg
        class="h-8 lg:h-auto"
        width="40"
        height="40"
        viewBox="0 0 90 90"
        fill="none"
      >
        <path
          d="M71.25 37.5H75C75.9946 37.5 76.9484 37.8951 77.6517 38.5984C78.3549 39.3016 78.75 40.2554 78.75 41.25V78.75C78.75 79.7446 78.3549 80.6984 77.6517 81.4017C76.9484 82.1049 75.9946 82.5 75 82.5H15C14.0054 82.5 13.0516 82.1049 12.3483 81.4017C11.6451 80.6984 11.25 79.7446 11.25 78.75V41.25C11.25 40.2554 11.6451 39.3016 12.3483 38.5984C13.0516 37.8951 14.0054 37.5 15 37.5H18.75V33.75C18.75 30.3028 19.429 26.8894 20.7482 23.7046C22.0673 20.5198 24.0009 17.626 26.4384 15.1884C28.876 12.7509 31.7698 10.8173 34.9546 9.49816C38.1394 8.17898 41.5528 7.5 45 7.5C48.4472 7.5 51.8606 8.17898 55.0454 9.49816C58.2302 10.8173 61.124 12.7509 63.5616 15.1884C65.9991 17.626 67.9327 20.5198 69.2518 23.7046C70.571 26.8894 71.25 30.3028 71.25 33.75V37.5ZM18.75 45V75H71.25V45H18.75ZM41.25 52.5H48.75V67.5H41.25V52.5ZM63.75 37.5V33.75C63.75 28.7772 61.7746 24.0081 58.2583 20.4917C54.7419 16.9754 49.9728 15 45 15C40.0272 15 35.2581 16.9754 31.7417 20.4917C28.2254 24.0081 26.25 28.7772 26.25 33.75V37.5H63.75Z"
          fill="white"
        />
      </svg>
      <p class="text-xl font-semibold">{{ $t('soon') }}</p>
    </div>
    <p class="text-2xl lg:text-3xl font-bold text-gray-800">
      {{ direction.title }}
    </p>
  </NuxtLink>
</template>
<script>
export default {
  name: 'CardComponent',
  props: {
    direction: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
