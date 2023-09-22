<template>
  <div class="radio__wrapper">
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
  </div>
</template>
<script>
export default {
  name: 'RadioButtons',
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
    display: flex;
    grid-gap: 16px;
  }
  &__button[class] {
    font-size: 14px;
    border-radius: 8px;
  }
}
</style>
