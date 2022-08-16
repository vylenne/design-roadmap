<template>
  <footer
    class="flex flex-col lg:flex-row justify-between py-0 lg:py-10 border-t dark:border-gray-400 mt-6 lg:mt-10 mb-2 lg:mb-0 text-sm dark:text-gray-300"
  >
    <div class="w-full px-4 py-6 lg:p-0 lg:w-2/3">
      <p class="mb-4 lg:mb-8 w-full lg:w-3/5">
        {{ $t('footer.resources') }}
        <a
          class="text-green-600 dark:text-green-500 hover:underline"
          href="https://t.me/vylenne"
          target="_blank"
          >{{ $t('footer.telegram') }}</a
        >
        {{ $t('footer.orVia') }}
        <a
          class="text-green-600 dark:text-green-500 hover:underline"
          href="mailto:v.vylenne@gmail.com"
          target="_blank"
          >{{ $t('footer.email') }}</a
        >.
      </p>

      <div class="flex flex-col lg:flex-row">
        <p class="mr-8">
          {{ $t('footer.translation') }}
          <a
            class="text-pink-500 dark:text-pink-400 hover:underline"
            href="https://t.me/iamleejeongmi"
            target="_blank"
            >{{ $t('footer.alex') }}
          </a>
        </p>

        <p class="mr-8 my-2 lg:my-0">
          {{ $t('footer.design') }}
          <a
            class="text-blue-700 dark:text-blue-600 hover:underline"
            href="https://t.me/plmk_dsgn"
            target="_blank"
            >{{ $t('footer.pavel') }}</a
          >/<a
            class="text-green-600 dark:text-green-500 hover:underline"
            href="https://t.me/vylenne"
            target="_blank"
            >{{ $t('footer.vilena') }}</a
          >
        </p>

        <p>
          {{ $t('footer.designAndDevelopment') }}
          <a
            class="text-green-600 dark:text-green-500 hover:underline"
            href="https://t.me/vylenne"
            target="_blank"
          >
            {{ $t('footer.vilena') }}
          </a>
        </p>
      </div>
    </div>
    <div class="self-center mt-4 lg:mt-0 lg:self-end">
      <button
        class="bg-gray-900 text-white rounded-full py-2 px-4 mb-4 transition dark:text-gray-300 hover:shadow-md hover:shadow-gray-300 dark:hover:shadow-gray-600"
        @click="openModal"
      >
        {{ $t('support') }}
      </button>
      <Logo class="text-gray-700 dark:text-gray-300" />
      <p
        class="text-center lg:text-right text-sm mt-1 text-gray-600 dark:text-gray-400"
      >
        © 2022
      </p>
    </div>
    <modal-component v-if="open" @close-modal="closeModal" />
  </footer>
</template>

<script>
import Logo from './svg/Logo.vue'

export default {
  name: 'FooterComponent',
  components: { Logo },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    openModal() {
      this.open = true
    },
    closeModal() {
      this.open = false
    },
  },
}
</script>
