<template>
  <div class="item">
    <div class="item__content content">
      <p class="content__title">{{ title }}</p>
      <n-button variant="secondary" class="cta" :size="$device.isMobile ? 'xs' : 'md'">
        Смотреть все
      </n-button>
    </div>
    <img class="item__thumb" src="http://placekitten.com/200/300" />
  </div>
</template>
<script>
export default {
  name: 'VerticalAdvertising',
  props: {
    title: {
      type: String,
      default: 'Популярное \nсреди \nкурьеров',
    },
  },
};
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--secondary-500, #3E4157);
  &:hover {
    .item {
      &__thumb {
        height: 70%;
        @include breakpoint.down(md) {
          height: 50%;
          width: 100%;
        }
      }
    }
  }

  &__content {
    padding: 72px 16px;
    max-height: 50%;
    position: relative;
    z-index: 1;
    @include breakpoint.down(md) {
      padding: 24px 16px;
      position: relative;
    }
  }
  &__thumb {
    display: flex;
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    transition: .2s;
    left: 0;
    object-fit: cover;
    object-position: center;
    @include breakpoint.down(md) {
      width: 50%;
      left: initial;
      right: 0;
    }
  }
}
.content {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  grid-gap: 16px;
  @include breakpoint.down(md) {
    text-align: start;
    align-items: baseline;
  }

  &__title {
    color: var(--white, #FFF);
    font-size: 24px;
    font-weight: 700;
    line-height: 133.333%;
    white-space: pre-line;
    @include breakpoint.down(md) {
      font-size: 18px;
      font-weight: 800;
    }
  }
}
.cta {
  @include breakpoint.down(md) {
    position: absolute;
    top: 100%;
    left: 16px;
  }
}
</style>
