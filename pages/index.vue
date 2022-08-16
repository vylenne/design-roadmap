<template>
  <div class="pt-6">
    <div class="container mx-auto min-h-full h-auto flex flex-col">
      <h1 class="text-2xl lg:text-4xl mx-4 lg:mx-0 font-bold text-center dark:text-gray-200">
        {{ $t('mainHeader') }}
      </h1>
      <p class="mt-2 lg:mt-4 mb-4 lg:mb-10 mx-4 lg:mx-0 text-center dark:text-gray-200">
        {{ $t('mainDescription') }}
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 mx-4 xl:m-0">
        <card-component v-for="direction in directions" :key="direction.name" :direction="direction" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/FooterComponent.vue'
import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'MainPage',
  components: { Footer, CardComponent },
  computed: {
    directions() {
      return [
        {
          link: '/ui-ux',
          color: 'bg-blue-100 hover:bg-blue-200',
          title: this.$i18n.t('ways.uiux'),
          blocked: false,
        },
        {
          link: '/mobile',
          color: 'bg-red-100 hover:bg-red-200',
          title: this.$i18n.t('ways.mobile'),
          blocked: true,
        },
        {
          link: '/product',
          color: 'bg-purple-100 hover:bg-purple-200',
          title: this.$i18n.t('ways.product'),
          blocked: true,
        },
        {
          link: '/motion',
          color: 'bg-orange-100 hover:bg-orange-200',
          title: this.$i18n.t('ways.motion'),
          blocked: true,
        },
        {
          link: '/graphic',
          color: 'bg-lime-100 hover:bg-lime-200',
          title: this.$i18n.t('ways.graphic'),
          blocked: true,
        },
        {
          link: '/3d',
          color: 'bg-rose-100 hover:bg-rose-200',
          title: this.$i18n.t('ways.3D'),
          blocked: true,
        },
        {
          link: '/game',
          color: 'bg-sky-100 hover:bg-sky-200',
          title: this.$i18n.t('ways.game'),
          blocked: true,
        },
      ]
    }
  },
}
</script>
