<template>
  <footer class="flex justify-between py-10 border-t mt-10 text-sm">
    <div class="w-2/3">
      <p class="mb-8 w-3/5">
        Если у вас есть материалы, которыми вы бы хотели поделиться, вы можете
        написать нам в
        <a
          class="text-green-600 hover:underline"
          href="https://t.me/vylenne"
          target="_blank"
        >телеграм</a> или на <a
          class="text-green-600 hover:underline"
          href="mailto:v.vylenne@gmail.com"
          target="_blank"
        >почту</a>.
      </p>

      <div class="flex">
        <p class="mr-8">
          Перевод —
          <a
            class="text-pink-500 hover:underline"
            href="https://t.me/iamleejeongmi"
            target="_blank"
            >Алекс
          </a>
        </p>

        <p class="mr-8">
          Дизайн —
          <a
            class="text-blue-700 hover:underline"
            href="https://t.me/plmk_dsgn"
            target="_blank"
            >Павел</a
          >/<a
            class="text-green-600 hover:underline"
            href="https://t.me/vylenne"
            target="_blank"
            >Вилена</a
          >
        </p>

        <p>
          Дизайн и разработка —
          <a
            class="text-green-600 hover:underline"
            href="https://t.me/vylenne"
            target="_blank"
          >
            Вилена
          </a>
        </p>
      </div>
    </div>
    <div class="self-end">
      <NuxtLink to="/">
        <Logo class="h-4" />
      </NuxtLink>
      <p class="text-right text-sm mt-1 text-gray-600">© 2022</p>
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
