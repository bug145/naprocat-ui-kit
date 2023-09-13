<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NBadge',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'secondary',
          'warning',
        ].includes(value);
      },
    },
    position: {
      type: String,
      default: 'relative',
      validator(value) {
        return [
          'relative',
          'top-right',
        ].includes(value);
      },
    },
    rounded: {
      type: String,
      default: 'md',
      validator(value) {
        return [
          'xl',
          'lg',
          'md',
          '0',
        ].includes(value);
      },
    },
  },
  computed: {
    classList() {
      const inClass = ['badge'];
      if (this.variant) {
        inClass.push(`variant--${this.variant}`);
      }
      if (this.position) {
        inClass.push(`position--${this.position}`);
      }
      if (this.rounded) {
        inClass.push(`rounded--${this.rounded}`);
      }
      return inClass.join(' ');
    },
  },
};
</script>

<style scoped lang="scss">
.badge{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 5px 10px;
  width: fit-content;
  &.variant {
    &--primary {
      color: #FFFFFF;
      background-color: var(--primary-color);
    }
    &--secondary {
      color: #828282;
      background-color: #F8F8F8;
    }
    &--warning {
      color: #000000;
      background: #FFD600;
    }
  }
  &.position {
    &--relative{
      position: relative;
    }
    &--top-right {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  &.rounded{
    &--xl{
      border-radius: 80px
    }
    &--lg{
      border-radius: 20px
    }
    &--md{
      border-radius: 10px
    }
    &--0{
      border-radius: 0
    }
  }
}
</style>
