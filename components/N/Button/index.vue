<template>
  <button
    :class="classList"
    :type="type"
    :disabled="disabled"
    @click="clickHandler"
  >
    <atoms-result
      v-if="pending"
      size="xs"
      :variant="paddingBlue ? 'blue' : 'white'"
    />
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    type: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'submit', 'reset'].includes(value);
      },
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'secondary',
          'success',
          'gray',
          'dark',
          'outline-primary',
          'link',
        ].includes(value);
      },
    },
    textVariant: {
      type: String,
      default: 'default',
      validator(value) {
        return ['blue', 'black', 'gray', 'white', 'red', 'default'].includes(
          value,
        );
      },
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['lg', 'md', 'sm', 'xs'].includes(value);
      },
    },
    rounded: {
      type: String,
      default: 'md',
      validator(value) {
        return ['xl', 'lg', 'md', 'sm', 'xs', '0'].includes(value);
      },
    },
    disabled: Boolean,
    prevent: Boolean,
    block: Boolean,
    pending: Boolean,
  },
  computed: {
    classList() {
      const baseClass = 'n-button';
      const classList = [baseClass];
      if (this.variant) {
        classList.push(`${baseClass}--variant--${this.variant}`);
      }
      if (this.size) {
        classList.push(`${baseClass}--size--${this.size}`);
      }
      if (this.rounded) {
        classList.push(`${baseClass}--rounded--${this.rounded}`);
      }
      if (this.textVariant) {
        classList.push(`${baseClass}--text-variant--${this.textVariant}`);
      }
      if (this.block) {
        classList.push(`${baseClass}--block`);
      }
      if (this.disabled) {
        classList.push(`${baseClass}--disabled`);
      }
      return classList;
    },
    paddingBlue() {
      return (
        this.variant === 'secondary'
        || this.variant === 'gray'
        || this.variant === 'link'
        || this.variant === 'outline-primary'
      );
    },
  },
  methods: {
    clickHandler() {
      if (!this.prevent && !this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>

<style scoped lang="scss">
.n-button {
  width: auto;
  white-space: nowrap;
  position: relative;
  border: none;
  cursor: pointer;
  outline-color: var(--primary-color, #00bfff);
  outline-style: solid;
  outline-width: 0;

  &:hover:not([disabled]) {
    outline-width: 2px;
  }

  &--block {
    display: block;
    width: 100%;
  }

  &--disabled {
    opacity: 0.5;
  }

  &--size {
    &--lg {
      height: 60px;
      padding: 0 20px;
      font-size: 18px;
      line-height: 20px;
    }

    &--md {
      height: 46px;
      padding: 0 30px;
      font-size: 16px;
      line-height: 19px;
    }

    &--sm {
      height: 40px;
      font-size: 14px;
      line-height: 17px;
    }

    &--xs {
      height: 30px;
      font-size: 15px;
      line-height: 19px;
      padding: 0 15px;
    }
  }

  &--variant {
    &--primary {
      background: #4daaff;
      color: #ffffff;
    }

    &--secondary {
      background: #f8f8f8;
      color: #828282;
    }

    &--gray {
      background: #828282;
      color: #ffffff;
    }

    &--dark {
      background: #333333;
      color: #ffffff;
    }

    &--link {
      background: transparent;
      height: 24px;
      color: rgba(40, 48, 57, 0.5);
      text-decoration-line: underline;
    }

    &--outline-primary {
      background-color: rgba(77, 170, 255, 0.1);
      border: 1px solid #4daaff;
    }
  }

  &--rounded {
    &--xl {
      border-radius: 70px;
    }

    &--lg {
      border-radius: 20px;
    }

    &--md {
      border-radius: 10px;
    }

    &--sm {
      border-radius: 8px;
    }

    &--xs {
      border-radius: 4px;
    }

    &--0 {
      border-radius: 0;
    }
  }

  &--text-variant {
    &--black {
      color: #333333;
    }

    &--white {
      color: #ffffff;
    }

    &--gray {
      color: #828282;
    }

    &--blue {
      color: #4daaff;
    }

    &--red {
      color: #eb5757;
    }
  }
}
</style>
