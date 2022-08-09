<template>
  <footer
    class="flex flex-col lg:flex-row justify-between py-0 lg:py-10 border-t dark:border-gray-400 mt-6 lg:mt-10 mb-2 lg:mb-0 text-sm dark:text-gray-300"
  >
    <div class="w-full px-4 py-6 lg:p-0 lg:w-2/3">
      <p class="mb-4 lg:mb-8 w-full lg:w-3/5">
        Если у&nbsp;вас есть материалы, которыми вы&nbsp;бы хотели поделиться,
        вы&nbsp;можете написать нам&nbsp;в
        <a
          class="text-green-600 dark:text-green-500 hover:underline"
          href="https://t.me/vylenne"
          target="_blank"
          >телеграм</a
        >
        или на
        <a
          class="text-green-600 dark:text-green-500 hover:underline"
          href="mailto:v.vylenne@gmail.com"
          target="_blank"
          >почту</a
        >.
      </p>

      <div class="flex flex-col lg:flex-row">
        <p class="mr-8">
          Перевод —
          <a
            class="text-pink-500 dark:text-pink-400 hover:underline"
            href="https://t.me/iamleejeongmi"
            target="_blank"
            >Алекс
          </a>
        </p>

        <p class="mr-8 my-2 lg:my-0">
          Дизайн —
          <a
            class="text-blue-700 dark:text-blue-600 hover:underline"
            href="https://t.me/plmk_dsgn"
            target="_blank"
            >Павел</a
          >/<a
            class="text-green-600 dark:text-green-500 hover:underline"
            href="https://t.me/vylenne"
            target="_blank"
            >Вилена</a
          >
        </p>

        <p>
          Дизайн и разработка —
          <a
            class="text-green-600 dark:text-green-500 hover:underline"
            href="https://t.me/vylenne"
            target="_blank"
          >
            Вилена
          </a>
        </p>
      </div>
    </div>
    <div class="self-center mt-4 lg:mt-0 lg:self-end">
      <button
        class="bg-gray-900 text-white rounded-full py-2 px-4 mb-4 hover:bg-gray-700 dark:text-gray-300 hover:shadow-lg"
      >
        Поддержать проект
      </button>
      <Logo class="text-gray-700 dark:text-gray-300" />
      <p
        class="text-center lg:text-right text-sm mt-1 text-gray-600 dark:text-gray-400"
      >
        © 2022
      </p>
    </div>
  </footer>
</template>

<script>
import Logo from './svg/Logo.vue'

export default {
  name: 'FooterComponent',
  components: { Logo },
}
</script>
