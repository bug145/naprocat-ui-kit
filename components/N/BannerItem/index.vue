<template>
  <nuxt-link class="banner" :to="goTo(item)">
    <img
      class="banner__bg"
      loading="lazy"
      :src="item.image_url"
      :alt="`${item.name} - ${item.description}`"
    />
    <p class="banner__name">
      {{ item.name }}
    </p>
    <p class="banner__text">
      {{ item.description }}
    </p>
    <n-badge variant="warning" rounded="xl">
      от
      <p class="banner__price">
        {{ item.price }}
      </p>
      день
    </n-badge>
    <!--    <atoms-direction class="banner__rent" :text="`${$t('rent')}`" />-->
  </nuxt-link>
</template>

<script>
export default {
  name: 'NBannerItem',
  props: {
    item: {
      type: [Object, Array],
      default: () => undefined,
    },
  },
  methods: {
    goTo() {
      return '#';
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 40px 40px 20px 40px;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  grid-gap: 0;
  text-decoration: none;
  @include breakpoint.down(md) {
    padding: 30px 24px 30px 24px;
  }
  &:hover {
    opacity: .9;
  }
  &:nth-child(1) {
    grid-column: span 3;
  }
  &:nth-child(2) {
    grid-column: span 2;
  }
  &:nth-child(3) {
    grid-column: span 2;
  }
  &:nth-child(4) {
    grid-column: span 3;
  }

  &__name {
    color: #333333;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 6px;
    @include breakpoint.down(md) {
      font-size: 20px;
    }
  }
  &__text {
    max-width: 200px;
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 400;
    color: #333333;
    @include breakpoint.down(md) {
      font-size: 14px;
    }
  }
  &__price {
    margin: 0 7px 0 7px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.1;
    text-transform: uppercase;
    color: #000000;
    @include breakpoint.down(md) {
      font-size: 14px;
    }
  }
  &__rent {
    position: absolute;
    bottom: 15px;
    @include breakpoint.down(md) {
      display: none;
    }
  }
  &__bg[class] {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    left: 0;
    top: 0;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
    object-position: bottom right;
  }
}
</style>
