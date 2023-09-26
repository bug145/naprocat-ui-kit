<template>
  <div class="avatar" :class="avatarClasses">
    <avatarIcon class="avatar__icon" />
  </div>
</template>

<script>
import avatarIcon from '../../../assets/icons/avatar/profile.svg?inline';

export default {
  name: 'NAvatar',
  components: {
    avatarIcon,
  },
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator(val) {
        return [
          'primary',
        ].includes(val);
      },
    },
    size: {
      type: String,
      default: 'lg',
      validator(val) {
        return [
          'lg',
          'md',
          'sm',
        ].includes(val);
      },
    },
  },
  computed: {
    avatarClasses() {
      const items = [];
      items.push(`avatar--variant--${this.variant}`);
      items.push(`avatar--size--${this.size}`);
      return items;
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  &--variant {
    &--primary {
      .avatar {
        &__icon {
          :deep(g) {
            path:first-of-type {
              // Если будут варианты аватарок
              // fill: red;
            }
          }
        }
      }
    }
  }
  &--size {
    &--lg {
      .avatar {
        &__icon {
          width: 32px;
          height: 32px;
        }
      }
    }
    &--md {
      .avatar {
        &__icon {
          width: 24px;
          height: 24px;
        }
      }
    }
    &--sm {
      .avatar {
        &__icon {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>
