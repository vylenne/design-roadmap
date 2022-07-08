<template>
  <div class="min-h-full h-full container mx-auto pt-10 flex flex-col">
    <h1 class="text-5xl font-bold text-center">Роадмапы для дизайнеров 2022</h1>
    <p class="mt-6 mb-10 text-center">
      Выберите направление, в котором вы хотите развиваться.
    </p>
    <div class="columns-3 gap-8 flex flex-1">
      <UIUXDesign />
      <MobileDesign />
      <ProductDesign />
    </div>
    <Footer />
  </div>
</template>

<script>
import UIUXDesign from '@/components/mainBlocks/uiuxDesign.vue'
import MobileDesign from '@/components/mainBlocks/mobileDesign.vue'
import ProductDesign from '@/components/mainBlocks/productDesign.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  name: 'MainPage',
  components: { UIUXDesign, MobileDesign, ProductDesign, Footer },
}
</script>
