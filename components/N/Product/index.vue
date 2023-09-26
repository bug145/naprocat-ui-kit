<template>
  <div :key="item.slug" class="product" :class="`product--${variant}`">
    <nuxt-link
      v-if="item"
      class="product__link"
      :to="`/product/${item.slug}/`"
    >
      <div class="product__thumb images">
        <img :src="item.images[0].full_url" :alt="item.name" class="images__item" />
      </div>

      <div class="product__info">
        <p class="product__price">
          <span class="product__cost">{{ `${item.main_min_price} ₸` }}</span>{{ item.rent_type }}
        </p>
        <p class="product__name">
          {{ item.name }}
        </p>
        <p class="product__city">
          {{ item.user.name || item.user.last_name }}
        </p>
      </div>
    </nuxt-link>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NProductItem',
  props: {
    item: {
      type: Object,
      default: () => (undefined),
    },
    variant: {
      type: String,
      default: 'col',
      validator: (v) => ['col', 'row', 'my-product'].includes(v),
    },
  },
  data() {
    return {
      pending: false,
    };
  },
  computed: {
  },
  methods: {
    toggleFavorite() {
      this.pending = true;
      setTimeout(() => {
        this.pending = false;
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
  .product {
    height: min-content;
    border-radius: 16px;
    transition: .2s;
    overflow: hidden;
    position: relative;
    &:hover {
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
      .product {
        &__thumb {
          transform: scale(1.2);
        }
      }
    }
    &__link {
      display: block;
      position: relative;
      text-decoration: none;
    }
    &__thumb {
      height: 180px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .2s;
      background: white;
      @include breakpoint.down(md) {
        height: 130px;
      }
    }
    &__info {
      height: 120px;
      padding: 16px;
      font-weight: 400;
      background: var(--neutral-white-color, #FFF);
      position: relative;
      z-index: 1;
      @include breakpoint.down(md) {
        height: 96px;
        padding: 8px;
        padding-bottom: 28px;
      }
    }
    &__name {
      font-size: 14px;
      line-height: 16px;
      color: #333333;
      overflow: hidden;
      display: -webkit-box;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      @include breakpoint.down(md) {
        font-size: 12px;
        margin-bottom: 4px;
      }
    }
    &__price {
      font-size: 14px;
      line-height: 16px;
      color: var(--neutral-lighter-text-color, #6D758F);
      margin-bottom: 8px;
      font-size: 500;
      @include breakpoint.down(md) {
        font-size: 12px;
        margin-bottom: 4px;
      }
    }
    &__cost {
      color: var(--primary-secondary-color, #3E4157);
      font-size: 18px;
      font-weight: 800;
      line-height: 24px;
      margin-right: 4px;
      @include breakpoint.down(md) {
        font-size: 16px;
      }
    }
    &__city {
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      position: absolute;
      bottom: 16px;
      white-space: nowrap;
      color: var(--secondary-400, #6D758F);
      @include breakpoint.down(md) {
        bottom: 8px;
        font-size: 12px;
      }
    }
  }
  .row{
    display: flex;
    .product{
      &__picture{
        width: 241px;
      }
      &__tariff{
        position: initial;
        margin-top: 10px;
      }
      &__info{
        height: auto;
        width: calc(100% - 241px);
      }
      &__name{
        margin-bottom: 10px;
        font-size: 22px;
        line-height: 28px;
      }
      &__text{
        color: #333333;
      }
      &__price{
        color: #333333;
        font-weight: 600;
      }
      &__rent{
        display: flex;
        position: absolute;
        bottom: 10px;
        &-text{
          color: #333333;
          font-family: var(--font-rubik);
          font-weight: 500;
          font-size: 13px;
          line-height: 1.8;
          margin-right: 10px;
        }
      }
      &__busy{
        height: 100%;
        width: 241px;
      }
    }
  }

  .images {
    &__item {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
</style>
