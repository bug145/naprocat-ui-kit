<template>
  <transition
    name="fadeIn"
    @enter="overlayReady = true"
  >
    <client-only>
      <component
        :is="wrapperComponent"
        v-if="wrapperShow"
        :class="wrapperClasses"
        v-bind="isDropDown ? {
          trigger: 'clickToToggle',
          options: popperOptions,
          visibleArrow: false,
        } : {}"
        class="modal__overlay"
      >
        <transition
          :name="modalTransitionName"
          @leave="contentHidden = true"
        >
          <div
            v-if="contentShow"
            v-click-outside="outsideClick"
            class="modal__content"
            :class="classes"
          >
            <div class="modal__header">
              <p class="modal__title">
                <slot name="title">
                  {{ title }}
                </slot>
              </p>
              <p
                v-if="subtitle"
                class="modal__subtitle"
              >
                <slot name="subtitle">
                  {{ subtitle }}
                </slot>
              </p>
              <div
                v-if="hasTopUnderHeaderSlot"
                class="modal__top"
              >
                <slot name="top"></slot>
              </div>
            </div>
            <button
              type="button"
              class="modal__close"
              @click="closeModal"
            ></button>
            <div
              class="modal__body"
              :class="bodyClasses"
            >
              <slot></slot>
            </div>
            <div
              v-if="showFooter"
              class="modal__footer"
            >
              <slot name="footer">
                <UIButton
                  v-if="submitText"
                  :active="!disableSubmit"
                  variant="primary"
                  type="button"
                  @click="submitHandle"
                >
                  {{ submitText }}
                </UIButton>
              </slot>
            </div>
          </div>
        </transition>

        <div
          v-if="hasTriggerSlot"
          slot="reference"
          class="modal__trigger"
        >
          <slot name="trigger"></slot>
        </div>
      </component>
    </client-only>
  </transition>
</template>

<script>
import vClickOutside from 'v-click-outside';
import { set } from 'vue';
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
  name: 'ModalComponent',
  components: {
    popper: Popper,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    size: {
      type: String,
      default: 'md',
      validator: (v) => ['sm', 'md', 'lg'].includes(v),
    },
    value: {
      /**
       * Открытие и закрытие модалки
       * контролируется через v-model
       */
      type: Boolean,
      default: false,
    },
    disableSubmit: {
      /**
       * Отключает кнопку в футере
       */
      type: Boolean,
      default: false,
    },
    fluidBody: {
      /**
       * Растягивает контент на всю ширину
       */
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    title: {
      /**
       * Заголовок
       * Текст можно поставить и через слот
       */
      type: String,
      default: 'Заголовок',
    },
    subtitle: {
      /**
       * Подзаголовок
       * Текст можно поставить и через слот
       */
      type: String,
      default: '',
    },
    submitText: {
      /**
       * Текст для кнопки в футере
       * если не указано и слот футера пустой
       * то футер не будет отображаться
       */
      type: String,
      default: '',
    },
  },
  data() {
    return {
      overlayReady: false,
      contentHidden: true,
      popperOptions: {
        gpuAcceleration: true,
        placement: 'auto',
        originalPlacement: 'bottom',
        modifiers: { offset: { offset: '0, 6px' } },
      },
    };
  },
  computed: {
    isDropDown() {
      return this.hasTriggerSlot && !this.$isMobile;
    },
    wrapperComponent() {
      return this.isDropDown
        ? Popper
        : 'div';
    },
    classes() {
      const items = {
        [`modal__content--size--${this.size}`]: true,
      };

      if (this.hasTopUnderHeaderSlot) {
        set(items, 'modal__content--with-top-block', true);
      }

      if (this.inline) {
        set(items, 'modal__content--inline', true);
      }
      return items;
    },
    wrapperClasses() {
      return {
        'modal__overlay--inline': this.inline,
        'modal__overlay--attach': this.hasTriggerSlot,
        'modal__overlay--open-modal': this.value,
      };
    },
    bodyClasses() {
      return {
        'modal__body--fluid': this.fluidBody,
      };
    },
    wrapperShow() {
      const contentVisible = !this.contentHidden;

      return contentVisible
              || this.value
              || (!this.$isMobile && this.hasTriggerSlot)
              || (!this.$isMobile && this.inline);
    },
    contentShow() {
      return (this.value && this.overlayReady)
      || (!this.$isMobile && this.hasTriggerSlot)
      || (!this.$isMobile && this.inline);
    },

    modalOpen: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
    modalTransitionName() {
      return this.$isMobile ? 'fadeInUpBig' : 'fadeIn';
    },
    hasTopUnderHeaderSlot() {
      return this.$slots.top && this.$slots.top.length > 0;
    },
    hasFooterSlot() {
      return this.$slots.footer && this.$slots.footer.length > 0;
    },
    hasTriggerSlot() {
      return this.$slots.trigger && this.$slots.trigger.length > 0;
    },
    showFooter() {
      return this.submitText || this.hasFooterSlot;
    },
    notInline() {
      return !this.inline && !this.hasTriggerSlot;
    },
  },
  watch: {
    value(val) {
      this.contentHidden = val;
      this.overlayReady = false;

      const closing = !val;
      const opening = val;

      if (closing) {
        setTimeout(() => {
          this.unpinWindow();
        }, 500);
      }

      if (opening) {
        this.fixWindow();
      }
    },
  },
  methods: {
    outsideClick() {
      this.modalOpen = false;
    },
    closeModal() {
      this.modalOpen = false;
    },
    submitHandle() {
      this.$emit('submit');
    },
    fixWindow() {
      if (this.notInline) {
        const diff = window.innerWidth - document.body.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${diff}px`;
      }
    },
    unpinWindow() {
      if (this.notInline) {
        document.body.style.removeProperty('overflow');
        document.body.style.marginRight = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$border-radius: 20px;
$padding-top: 20px;

$top-height: 285px;
$mobile-top-height: 300px;

@mixin top-border-radius {
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
}

.modal {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    @include breakpoint.down(md) {
      align-items: flex-end;
    }

    &--inline,
    &--attach {
      @include breakpoint.up(md) {
        display: block;
        position: static;
        background: transparent;
        .modal {
          &__title {
            @include breakpoint.up(md) {
              display: none;
            }
          }
          &__close {
            @include breakpoint.up(md) {
              display: none;
            }
          }
        }
      }
    }

    &--attach {
      @include breakpoint.down(md) {
        .modal {
          &__trigger {
            display: none;
          }
        }
      }
    }
  }
  &__top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: $top-height;
    overflow: hidden;
    z-index: -1;
    pointer-events: all;
    @include top-border-radius;
    @include breakpoint.down(md) {
      height: $mobile-top-height;
    }
    &:after {
      content: '';
      position: absolute;
      z-index: 1;
      background: white;
      height: 20px;
      width: 100%;
      bottom: 0;
      left: 0;
      @include top-border-radius;
    }
  }
  &__content {
    background: #FFFFFF;
    border-radius: $border-radius;
    position: relative;
    top: 0;
    z-index: 9999;
    padding: 20px;
    padding-top: $padding-top;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    min-height: 100px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    @include breakpoint.down(md) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    &--size {
      &--sm {
        padding: 30px 20px;
        width: 454px;
        padding-top: $padding-top + 10px;
        padding-bottom: 20px;
      }
      &--md {
        padding: 20px 22px 28px;
        padding-bottom: 20px;
        width: 515px;
        .modal__body--fluid {
          width: calc(100% + 22px * 2);
          margin-left: -22px;
        }
      }
      &--lg {
        width: 600px;
        padding: 20px 30px;
        padding-bottom: 20px;
      }
    }
    &--with-top-block {
      .modal {
        &__header {
          flex-shrink: 0;
          flex-basis: $top-height - $padding-top * 2;
          justify-content: flex-start;
          @include breakpoint.down(md) {
            flex-basis: $mobile-top-height - $padding-top * 2;
          }
        }
      }
    }
    &--inline {
      @include breakpoint.up(md) {
        z-index: 1;
      }
    }
  }
  &__header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    flex: 1;
  }
  &__body {
    overflow: auto;
    flex: 1;
    display: flex;
    padding-top: $padding-top;
    &--fluid {
      width: calc(100% + 20px * 2);
      margin-left: -20px;
    }
  }
  &__footer {
    padding-top: 20px;
    flex: 1;
  }
  &__title {
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #333333;
    text-align: center;
    margin-bottom: 10px;
  }
  &__subtitle {
    font-weight: 400;
    max-width: 288px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 17px;
    color: #828282;
  }
  &__close {
    pointer-events: all;
    position: absolute;
    right: 25px;
    top: 30px;
    bottom: 13.64%;
    width: 16px;
    height: 16px;
    background-image: url('@/assets/icons/close.svg');
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
