<template>
  <div class="items__wrapper">
    <div class="items__header header">
      <n-section-header :label="label" :link="link" :href="href" />
      <n-radio-buttons
        v-if="filters?.length"
        v-model="filterLocal"
        class="header__links"
        :items="filters"
      />
    </div>
    <div class="items__body" :class="bodyClasses">
      <div v-if="banner" class="items__banner">
        <n-ad-vertical />
      </div>

      <div v-if="adjustedItems" class="items__content items__grid">
        <div
          v-for="item in adjustedItems"
          :key="item.id"
          class="carousel__item products"
        >
          <n-product
            class="products__item"
            :item="item"
          />
        </div>
      </div>

      <div v-if="extraItems" class="items__extra items__grid items__grid--full">
        <div
          v-for="item in extraItems"
          :key="item.id"
          class="carousel__item products"
        >
          <n-product
            class="products__item"
            :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import take from 'lodash/take';
import drop from 'lodash/drop';

export default {
  name: 'NBriefcase',
  props: {
    label: {
      type: String,
      default: 'Коллекция',
    },
    link: {
      type: String,
      default: undefined,
    },
    href: {
      type: Object,
      default: undefined,
    },
    items: {
      type: Array,
      default: () => [],
    },
    filters: {
      type: Array,
      default: () => [],
    },
    banner: {
      type: Object,
      default: () => (undefined),
    },
    bannerPlacement: {
      type: String,
      default: 'left',
    },
    filter: {
      type: [String, Number, Boolean],
      default: undefined,
    },
  },
  computed: {
    filterLocal: {
      set(val) {
        this.$emit('update:filter', val);
      },
      get() {
        return this.filter;
      },
    },
    adjustedItems() {
      if (this.banner) {
        if (this.$device.isMobile) {
          return take(this.items, 1);
        }
        return take(this.items, 8);
      }
      return undefined;
    },
    extraItems() {
      if (this.banner) {
        if (this.$device.isMobile) {
          return drop(this.items, 1);
        }
        return drop(this.items, 8);
      }
      return this.items;
    },
    bodyClasses() {
      const items = [];
      if (!this.banner) {
        items.push('items__body--bannerless');
      }

      if (this.bannerPlacement) {
        items.push(`items__body--banner--${this.bannerPlacement}`);
      }

      return items;
    },
  },
};
</script>

<style lang="scss" scoped>
.items {
  &__wrapper {
    display: flex;
    flex-direction: column;
    grid-column-gap: 16px;
    grid-row-gap: 24px;
    @include breakpoint.down(md) {
      padding: 0 16px;
    }
  }
  &__header {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
  }

  &__body {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
    @include breakpoint.down(md) {
      grid-template-columns: repeat(2, 1fr);
    }
    &--bannerless {
      display: flex;
    }
    &--banner {
      &--left {
        .items {
          &__banner {
            grid-area: 1 / 1 / 3 / 2;
            @include breakpoint.down(md) {
              grid-area: 1 / 1 / 2 / 2;
            }
          }
          &__content {
            grid-area: 1 / 2 / 3 / 6;
            @include breakpoint.down(md) {
              grid-area: 1 / 2 / 2 / 3;
            }
          }
        }
      }
      &--right {
        .items {
          &__banner {
            grid-area: 1 / 5 / 3 / 6;
            @include breakpoint.down(md) {
              grid-area: 1 / 1 / 2 / 2;
            }
          }
          &__content {
            grid-area: 1 / 1 / 3 / 5;
            @include breakpoint.down(md) {
              grid-area: 1 / 2 / 2 / 3;
            }
          }
        }
      }
    }
  }
  &__banner {
    min-height: 616px;
    @include breakpoint.down(md) {
      min-height: initial;
    }
  }
  &__extra {
    grid-area: 3 / 1 / 4 / 6;
    @include breakpoint.down(md) {
      grid-area: 2 / 1 / 3 / 3;
    }
  }
  &__grid {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(4, 1fr);
    @include breakpoint.down(md) {
      grid-template-columns: repeat(1, 1fr);
    }
    &--full {
      grid-template-columns: repeat(5, 1fr);
      @include breakpoint.down(md) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}

.carousel {
  &__item {
    display: flex;
    grid-gap: 16px;
    flex-direction: column;
  }
}

.header {
  &__links {
    width: 100vw;
    position: relative;
    left: -16px;
  }
}
</style>
