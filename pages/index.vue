<template>
  <div class="min-h-full h-full container mx-auto py-10 flex flex-col">
    <h1 class="text-5xl font-bold text-center">Роадмапы для дизайнеров 2022</h1>
    <p class="mt-6 mb-10 text-center">
      Выберите направление, в котором вы хотите развиваться.
    </p>
    <div class="columns-3 gap-8 flex flex-1">
      <UIUXDesign />
      <MobileDesign />
      <ProductDesign />
    </div>
    <footer class="text-center block mt-10">
      <p class="mb-2 font-semibold">Благодарности:</p>
      <a
        class="text-blue-500 text-sm block hover:underline"
        href="https://tglink.ru/iamleejeongmi"
        >Переводчице на все языки – Алекс</a
      >
      <a
        class="text-blue-500 text-sm block hover:underline"
        href="https://tglink.ru/Anub1sHateAll"
        >Дизайнеру и искателю материалов – Павел</a
      >
    </footer>
  </div>
</template>

<script>
import UIUXDesign from './Ways/uiuxDesign.vue'
import MobileDesign from './Ways/mobileDesign.vue'
import ProductDesign from './Ways/productDesign.vue'

export default {
  name: 'MainPage',
  components: { UIUXDesign, MobileDesign, ProductDesign },
}
</script>
