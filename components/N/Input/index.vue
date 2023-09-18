<template>
  <div :class="classList">
    <input v-model="modelValue" :type="type" />
  </div>
</template>

<script>
export default {
  name: 'NInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number, Object],
      default: undefined,
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
        ].includes(value);
      },
    },
    block: Boolean,
  },
  modal: {
    props: 'value',
    event: 'input',
  },
  computed: {
    classList() {
      const baseClass = 'n-input';
      const classList = [baseClass];

      if (this.variant) {
        classList.push(`${this.variant}--variant`);
      }
      if (this.block) {
        classList.push(`${this.block}--variant`);
      }
      return classList;
    },
    modelValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.n-input{
  position: relative;
  margin-bottom: 13px;
}
  .input{
    width: 100%;
    height: 60px;
    padding: 12px 18px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #ECECEC;
    border-radius: 10px;
    font-family: var(--font-rubik);
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    @include breakpoint.down(xl) {
      font-size: 14px;
      line-height: 1.2;
    }
    &::placeholder{
      font-weight: 400;
      color: #828282;
    }
  }
</style>
