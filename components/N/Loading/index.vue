<template>
  <div class="result" :class="containerClass">
    <transition name="zoomIn" mode="out-in">
      <span v-if="state === 'pending'" key="pending" class="pending"></span>
      <img
        v-else-if="state === 'success'"
        key="success"
        class="success"
        src="../../../assets/loading/success.gif"
        alt="success-state"
      />
      <img
        v-else-if="state === 'failed'"
        key="failed"
        class="failed"
        src="../../../assets/loading/failed.gif"
        alt="failed-state"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AtomsResult',
  props: {
    state: {
      type: String,
      default: 'pending',
      validator(val) {
        const states = [
          'pending',
          'success',
          'failed',
        ];
        return states.includes(val);
      },
    },
    variant: {
      type: String,
      default: 'primary',
      validator(val) {
        const states = [
          'primary',
          'secondary',
        ];
        return states.includes(val);
      },
    },
    size: {
      type: String,
      default: 'lg',
      validator(val) {
        const states = [
          'lg',
          'md',
          'sm',
          'xs',
        ];
        return states.includes(val);
      },
    },
  },
  computed: {
    containerClass() {
      const list = [];
      if (this.size?.length) {
        list.push(`result--${this.size}`);
      }
      if (this.variant?.length) {
        list.push(`result--${this.variant}`);
      }
      return list;
    },
  },
};
</script>

<style lang="scss" scoped>
.result {
  margin: auto;

  .success,
  .failed {
    width: 100%;
    height: 100%;
    transform: scale(1.58);
  }

  .pending {
    width: 100%;
    height: 100%;
    border: 6px solid #4DAAFF;
    border-bottom-color: transparent;
    border-left-color: transparent;

    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  &--lg {
    width: 110px;
    height: 110px;
  }

  &--md {
    width: 80px;
    height: 80px;
  }

  &--sm {
    width: 60px;
    height: 60px;
  }

  &--xs {
    width: 22px;
    height: 22px;

    &.result--secondary {
      .pending {
        border: 3px solid #FFFFFF;
        border-bottom-color: transparent;
        border-left-color: transparent;
      }
    }

    &.result--primary {
      .pending {
        border: 3px solid #4DAAFF;
        border-bottom-color: transparent;
        border-left-color: transparent;
      }
    }
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
