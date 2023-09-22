<template>
  <div class="item">
    <div class="item__content content">
      <p class="content__title">
        {{ title }}
      </p>
      <n-button variant="secondary" class="cta">
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
  background: var(--secondary-500, #3E4157);
  &:hover {
    .item {
      &__thumb {
        height: 70%;
      }
    }
  }

  &__content {
    padding: 72px 16px;
    max-height: 50%;
    position: relative;
    z-index: 1;
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

  &__title {
    color: var(--white, #FFF);
    font-size: 24px;
    font-weight: 700;
    line-height: 133.333%;
    white-space: pre-line;
  }
}
</style>
