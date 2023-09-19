<template>
  <div class="product">
    <nuxt-link
      v-if="item"
      class="product__block"
      :class="variant"
      :to="`/product/${item.slug}/`"
    >
      <div
        class="product__picture"
        @mousemove="mouseActive=true"
        @mouseleave="mouseActive=false"
      >
        <img :src="item.img" alt="" class="product__img" />
      </div>
      <div class="product__info">
        <div class="product__name text-max">
          {{ item.name }}
        </div>
        <img
          v-if="item.identified"
          class="product__moderation"
          :src="verification"
          alt=""
        />
        <div class="product__tariff">
          <p class="product__text capitalize">
            {{ cheapestType }}
          </p>
          <p class="product__text">
            от
            <label class="product__price">
              {{ cheapestPrice }}
            </label>
          </p>
        </div>
      </div>
      <div
        v-if="item.is_busy"
        class="product__busy"
      >
        <p class="product__busy-text">
          Занято
        </p>
      </div>
    </nuxt-link>
    <slot></slot>
    <img
      v-if="!pending"
      src="../../../assets/icons/favorites.svg"
      alt=""
      class="product__favorites"
      @click="toggleFavorite"
    />
    <n-loading
      v-else
      class="product__load"
      size="xs"
    />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import avatartModeration from '../../../assets/icons/verify-avatar.svg?data';

export default {
  name: 'NProductItem',
  props: {
    item: {
      type: [Array, Object],
      default: () => ({
        name: 'qwerty',
        slug: 1,
        // eslint-disable-next-line global-require
        img: `${require('../../../assets/icons/no-photo.svg')}`,
        price: 5000,
        type: 'Час',
        identified: true,
        is_busy: false,
      }),
    },
    variant: {
      type: String,
      default: 'col',
      validator: (v) => ['col', 'row', 'my-product'].includes(v),
    },
  },
  data() {
    return {
      mouseActive: false,
      pending: false,
    };
  },
  computed: {
    verification() {
      return avatartModeration;
    },
    identified() {
      return this.item?.user?.is_identified;
    },
    isFavorite() {
      return this.item?.favorite;
    },
    cheapestPrice() {
      const price = this.item.price ?? 0;
      return price;
    },
    cheapestType() {
      const type = this.item.type ?? 'день';
      return type;
    },
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
  .product{
    height: min-content;
    border-radius: 20px;
    border: 1px solid #F2F2F2;
    transition: .2s;
    overflow: hidden;
    position: relative;
    &:hover{
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
      top: -2px;
    }
    &__block{
      display: block;
      position: relative;
      text-decoration: none;
    }
    &__picture{
      height: 178px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      @include breakpoint.down(md) {
        height: 160px;
      }
      &:before{
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: 1;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
      }
    }
    &__img {
      height: 100%;
      object-fit: contain;
      object-position: top;
    }
    &__info{
      height: 72px;
      padding: 16px 52px 16px 16px;
      font-weight: 400;
      position: relative;
      @include breakpoint.down(md) {
        height: 60px;
        padding: 8px 10px 12px;
      }
    }
    &__name{
      font-size: 16px;
      line-height: 20px;
      color: #333333;
      @include breakpoint.down(md) {
        font-size: 14px;
        line-height: 17px;
      }
    }
    &__tariff{
      position: absolute;
      bottom: calc(100% + 16px);
      left: 16px;
      z-index: 2;
    }
    &__text{
      font-size: 14px;
      line-height: 18px;
      color: #FFFFFF;
    }
    &__price{
      font-size: 14px;
      line-height: 18px;
      color: #FFFFFF;
    }
    &__load{
      position: absolute;
      right: 18px;
      top: 16px;
      z-index: 2;
      @include breakpoint.down(md) {
        right: 12px;
        top: 8px;
      }
    }
    &__favorites{
      width: 22px;
      position: absolute;
      right: 18px;
      top: 16px;
      z-index: 2;
      cursor:pointer;
      path {
        stroke: var(--primary-color);
        transition: .3s;
      }
      &--active {
        path {
          stroke: var(--primary-color);
          fill: var(--primary-color);
          fill-opacity: 1;
          @include breakpoint.down(md) {
            stroke: #EB5757;
            fill: #EB5757;
          }
        }
      }
      @include breakpoint.down(md) {
        top: 10px;
        right: 10px;
      }
    }
    &__busy{
      width: 100%;
      height: calc(100% - 72px);
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @include breakpoint.down(md) {
        height: calc(100% - 60px);
      }
    }
    &__busy-text{
      font-size: 22px;
      line-height: 26px;
      letter-spacing: -0.16500000655651093px;
      text-align: left;
      color: #FFFFFF;
    }
    &__moderation{
      width: 26px;
      position: absolute;
      right: 16px;
      top: 16px;
      z-index: 2;
      cursor:pointer;
      @include breakpoint.down(md) {
        right: 8px;
        top: inherit;
        bottom: 8px;
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
</style>
