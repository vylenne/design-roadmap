<template>
  <vue-bottom-sheet
    ref="popup"
    max-width="100%"
    max-height="60%"
    :rounded="false"
    :is-full-screen="true"
    :overlay-color="overlayColorSelect"
  >
    <div class="p-4 lg:py-10 container mx-auto relative">
      <Close
        class="absolute top-4 lg:top-10 right-2 lg:right-0 z-10 cursor-pointer"
        @click.native="close"
      />
      <h1 class="text-2xl lg:text-3xl font-semibold mb-3 lg:mb-5">
        {{ resourceCategory }}
      </h1>
      <p class="w-full lg:w-3/4 mb-5 lg:mb-10">{{ resourceDescription }}</p>
      <div class="grid lg:grid-cols-2 gap-x-10 gap-y-0">
        <div v-for="(item, i) in resourceLinks" :key="i" class="flex">
          <a
            :href="item.link"
            target="_blank"
            class="grid grid-cols-8 lg:grid-cols-6 w-full gap-2 mb-4"
            :class="linkColor"
          >
            <TagComponent
              :type-id="item.id"
              :type-of-resource="item.tag"
              class="col-span-2 lg:col-span-1"
            />
            <span class="col-span-6 lg:col-span-5 mt-0.5">
              {{ item.title }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </vue-bottom-sheet>
</template>

<script>
import VueBottomSheet from '@webzlodimir/vue-bottom-sheet'
import TagComponent from './TagComponent.vue'
import Close from './svg/Close.vue'

export default {
  name: 'PopupComponent',
  components: {
    VueBottomSheet,
    Close,
    TagComponent,
  },
  props: {
    id: {
      type: String,
      default: '1',
    },
    resource: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      overlayColorSelect: '#6B728040',
    }
  },
  computed: {
    resourceCategory() {
      return this.resource?.category ?? ''
    },
    resourceDescription() {
      return this.resource?.description ?? ''
    },
    resourceLinks() {
      return this.resource?.links ?? ''
    },
    linkColor() {
      switch (this.id) {
        case '1':
          return 'hover:text-blue-500'
        case '2':
          return 'hover:text-red-500'
        case '3':
          return 'hover:text-purple-500'
        default:
          return 'hover:text-blue-500'
      }
    },
  },
  methods: {
    close() {
      this.$refs.popup.close()
    },
  },
}
</script>

<style scoped>
.bottom-sheet >>> .bottom-sheet__pan {
  display: none;
}

/* .bottom-sheet >>> .bottom-sheet__card,
.bottom-sheet >>> .bottom-sheet__content {
  height: auto !important;
} */

@media screen and (max-width: 450px) {
  .bottom-sheet >>> .bottom-sheet__pan {
    display: block;
  }
}
</style>
