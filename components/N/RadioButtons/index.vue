<template>
  <ssr-carousel
    v-if="items"
    :key="items.length"
    class="radio__wrapper"
    :slides-per-page="null"
    :gutter="8"
    :peek-left="16"
    :peek-right="16"
  >
    <n-button
      v-for="item in items"
      :key="item.value"
      size="sm"
      :variant="getVariant(item.value)"
      class="radio__button"
      @click="checked = item.value"
    >
      {{ item.text }}
    </n-button>
  </ssr-carousel>
</template>
<script>
import SsrCarousel from 'vue-ssr-carousel';
import 'vue-ssr-carousel/index.css';

export default {
  name: 'RadioButtons',
  components: {
    SsrCarousel,
  },
  props: {
    value: {
      type: [String, Number, Boolean, Array, Object],
      default: undefined,
    },
    items: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        if (this.value !== val) {
          this.$emit('input', val);
        }
      },
    },
  },
  methods: {
    getVariant(val) {
      if (this.checked === val) {
        return 'primary-outlined';
      }
      return 'secondary';
    },
  },
};
</script>

<style scoped lang="scss">
.radio {
  &__wrapper {
    // display: flex;
    // grid-gap: 16px;
  }
  &__button[class] {
    font-size: 14px;
    border-radius: 8px;
  }
}
</style>
