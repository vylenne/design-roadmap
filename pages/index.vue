<template>
  <div class="h-full pt-6 dark:bg-gray-800 dark:text-gray-300">
    <div class="container mx-auto min-h-full h-auto flex flex-col">
      <Header />
      <h1
        class="text-2xl lg:text-4xl mx-4 lg:mx-0 font-bold text-center dark:text-gray-300"
      >
        Роадмапы для дизайнеров 2022
      </h1>
      <p
        class="mt-2 lg:mt-4 mb-4 lg:mb-10 mx-4 lg:mx-0 text-center dark:text-gray-300"
      >
        Выберите направление, в&nbsp;котором вы&nbsp;хотите развиваться.
      </p>
      <div
        class="columns-3 gap-4 lg:gap-8 flex grow flex-col lg:flex-row px-4 lg:px-0"
      >
        <UIUXDesign />
        <MobileDesign />
        <ProductDesign />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import UIUXDesign from '@/components/mainBlocks/uiuxDesign.vue'
import MobileDesign from '@/components/mainBlocks/mobileDesign.vue'
import ProductDesign from '@/components/mainBlocks/productDesign.vue'

export default {
  name: 'MainPage',
  components: { UIUXDesign, MobileDesign, ProductDesign, Header, Footer },
}
</script>
