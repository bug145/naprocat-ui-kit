<template>
  <button
    :class="classList"
    :type="type"
    class="n-button"
    :disabled="disabled"
    @click="clickHandler"
  >
    <div v-if="hasPrependSlot" class="n-button__prepend">
      <slot name="prepend">
        <span>prepend</span>
      </slot>
    </div>

    <div class="n-button__content">
      <n-loading
        v-if="pending"
        size="xs"
        :variant="paddingBlue ? 'primary' : 'secondary'"
      />
      <slot v-else-if="hasDefaultSlot"></slot>
      <span v-else-if="fallback">{{ fallback }}</span>
    </div>

    <div v-if="hasAppendSlot" class="n-button__append">
      <slot name="append">
        <span>append</span>
      </slot>
    </div>
  </button>
</template>

<script>
import get from 'lodash/get';

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
          'primary-outlined',
          'secondary',
          'secondary-outlined',
          'success',
          'warning',
          'danger',
          'danger-outlined',
        ].includes(value);
      },
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['lg', 'md', 'sm', 'xs'].includes(value);
      },
    },
    align: {
      type: String,
      default: 'center',
      validator(value) {
        return ['start', 'center', 'end'].includes(value);
      },
    },
    fallback: {
      type: String,
      default: '',
    },
    pill: Boolean,
    link: Boolean,
    disabled: Boolean,
    prevent: Boolean,
    block: Boolean,
    pending: Boolean,
  },
  data() {
    return {
      hasDefaultSlot: true,
      hasPrependSlot: false,
      hasAppendSlot: false,
    };
  },
  computed: {
    classList() {
      const baseClass = 'n-button';
      const classList = [baseClass];

      if (this.variant) {
        classList.push(`${baseClass}--variant`);

        const variant = this.variant.split('-');
        classList.push(`${baseClass}--variant--${this.variant}`);
        for (let i = 0; i < variant.length; i += 1) {
          classList.push(`${baseClass}--variant--${variant[i]}`);
        }
      }
      if (this.size) {
        classList.push(`${baseClass}--size`);
        classList.push(`${baseClass}--size--${this.size}`);
      }
      if (this.pill) {
        classList.push(`${baseClass}--pill`);
      }
      if (this.link) {
        classList.push(`${baseClass}--link`);
      }
      if (this.align) {
        classList.push(`${baseClass}--align`);
        classList.push(`${baseClass}--align--${this.align}`);
      }
      if (this.block) {
        classList.push(`${baseClass}--block`);
      }
      if (this.disabled) {
        classList.push(`${baseClass}--disabled`);
      }
      if (this.fallback && !this.hasDefaultSlot) {
        classList.push(`${baseClass}--fallback`);
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
  updated() {
    this.setSlots();
  },
  created() {
    this.setSlots();
  },
  methods: {
    clickHandler() {
      if (!this.prevent && !this.disabled && !this.pending) {
        this.$emit('click');
      }
    },
    setSlots() {
      this.hasDefaultSlot = this.getDefaultSlot();
      this.hasPrependSlot = this.getPrependSlot();
      this.hasAppendSlot = this.getAppendSlot();
    },
    getDefaultSlot() {
      return !!get(this.$slots, ['default', 0, 'text'], '');
    },
    getPrependSlot() {
      return !!get(this.$slots, 'prepend', undefined);
    },
    getAppendSlot() {
      return !!get(this.$slots, 'append', undefined);
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
  outline-color: var(--primary-color, #4daaff);
  outline-style: solid;
  outline-width: 0;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &__prepend {
    margin-right: 0.5rem;
  }

  &__append {
    margin-left: 0.5rem;
  }

  &__content {
    display: flex;
    width: 100%;
  }

  &:hover:not([disabled]) {
    outline-width: 2px;
  }

  &--fallback {
    .n-button {
      &__content {
        color: #c7c7c7cc;
      }
    }
  }

  &--align {
    &--start {
      .n-button {
        &__content {
          justify-content: flex-start;
          text-align: start;
        }
      }
    }
    &--center {
      .n-button {
        &__content {
          justify-content: center;
          text-align: center;
        }
      }
    }
    &--end {
      .n-button {
        &__content {
          justify-content: flex-end;
          text-align: end;
        }
      }
    }
  }

  &--block {
    width: 100%;
  }

  &--disabled {
    opacity: 0.5;
  }

  &--size {
    line-height: 1;
    &--lg {
      min-height: 48px;
      padding: 12px 16px;
      font-size: 16px;
    }

    &--md {
      min-height: 40px;
      padding: 12px 16px;
      font-size: 14px;
    }

    &--sm {
      min-height: 32px;
      font-size: 10px;
      padding: 8px 16px;
    }

    &--xs {
      min-height: 24px;
      font-size: 10px;
      padding: 4px 16px;
    }
  }

  &--variant {
    &--primary {
      background: var(--color-primary, royalblue);
      color: #ffffff;
      &-outlined {
        border: 1.5px solid var(--color-primary, royalblue);
        background: var(--white, #FFF);
        color: var(--color-primary, var(--text-inverted, #24BA96));
        font-weight: 700;
      }
    }

    &--secondary {
      background: var(--white, #FFF);
      color: #333;
      &-outlined {
        border: 1px solid var(--, #F2F2F2);
        background: var(--gray, #F8F8F8);
      }
    }

    &--success {
      background: #333;
      color: #ffffff;
    }

    &--warning {
      background: #828282;
      color: white;
    }

    &--danger {
      background: #F8F8F8;
      color: #EB5757;
    }

  }

  &--pill {
    border-radius: 1200px;
  }

  &--link {
    border-radius: 0;
    background: none;
    padding-left: 0;
    padding-top: 0;
    padding-right: 0;
    color: black;
    &.n-button {
      &:hover:not([disabled]) {
        outline: none;
        text-decoration: underline;
      }
      &--variant {
        &[class*="--outlined"] {
          text-decoration: underline;
          border: none;
          &:hover:not([disabled]) {
            transform: scale(1.05);
          }
        }

        &--danger {
          color: #EB5757;
        }

        &--primary {
          color: #4DAAFF;
        }
      }
    }
  }
}
</style>
