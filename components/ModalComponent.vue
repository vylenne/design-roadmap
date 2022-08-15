<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 bg-slate-500 bg-opacity-60 flex justify-center items-center z-20"
  >
    <div
      v-click-outside="close"
      class="relative p-4 lg:px-10 lg:py-8 bg-white rounded-md w-full lg:w-3/5 mx-4 lg:m-0"
    >
      <Close
        class="absolute top-5 lg:top-8 right-5 lg:right-10 z-10 cursor-pointer text-gray-800 dark:text-gray-200"
        @click.native="close"
      />
      <h4 class="mb-5 lg:mr-0 text-xl lg:text-2xl font-semibold w-6/7">
        {{ $t('supportModal.title') }}
      </h4>
      <p class="mb-10 w-full lg:w-2/3 hidden lg:block">
        {{ $t('supportModal.description') }}
      </p>
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-x-7 text-sm lg:text-base mb-4 lg:mb-0"
      >
        <div
          class="bg-blue-200 rounded-md p-2 lg:px-4 lg:py-8 flex flex-col justify-between text-center h-auto lg:h-72 mb-4 lg:mb-0"
        >
          <p class="w-3/4 mx-auto mb-2 lg:mb-0">
            {{ $t('supportModal.ownerText') }}
          </p>
          <a
            class="flex justify-center py-2 bg-white rounded-full hover:shadow-md hover:shadow-blue-300 transition"
            href="https://www.tinkoff.ru/rm/vorobeva.elvira4/lNzfg78324"
            target="_blank"
            >{{ $t('supportModal.toCard') }}</a
          >
        </div>
        <div
          class="bg-red-200 rounded-md p-2 lg:px-4 lg:py-8 flex flex-col justify-between text-center h-auto lg:h-72 mb-4 lg:mb-0"
        >
          <p class="w-4/5 mx-auto mb-2 lg:mb-0">
            {{ $t('supportModal.translatorText') }}
          </p>
          <div>
            <a
              class="flex justify-center py-2 bg-white rounded-full mb-3 hover:shadow-md hover:shadow-red-300 transition"
              href="https://send.monobank.ua/qJnareSJ9"
              target="_blank"
              >{{ $t('supportModal.toCard') }}</a
            >
            <a
              class="flex justify-center py-2 bg-white rounded-full hover:shadow-md hover:shadow-red-300 transition"
              href="https://www.paypal.com/donate/?hosted_button_id=SH3REDFV8V2VW"
              target="_blank"
              >{{ $t('supportModal.toPaypal') }}</a
            >
          </div>
        </div>
        <div
          class="bg-purple-200 rounded-md p-2 lg:px-4 lg:py-8 flex flex-col justify-between text-center h-auto lg:h-72"
        >
          <p class="w-4/5 mx-auto mb-2 lg:mb-0">
            {{ $t('supportModal.cryptoText') }}
          </p>
          <a
            class="flex justify-center py-2 bg-white rounded-full hover:shadow-md hover:shadow-purple-300 transition"
            href="https://i.ibb.co/MVcVT7Y/Binance-Pay-QR-1.png"
            target="_blank"
            >{{ $t('supportModal.toCryptoWallet') }}</a
          >
        </div>
      </div>
      <p class="mt-5 lg:mt-10 w-full lg:w-3/4 text-sm lg:text-base">
        {{ $t('supportModal.thanks') }}
      </p>
    </div>
  </div>
</template>
<script>
import Close from './svg/Close.vue'

export default {
  name: 'ModalComponent',
  components: { Close },
  methods: {
    close() {
      this.$emit('close-modal')
    },
  },
}
</script>
