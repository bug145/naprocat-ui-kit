<template>
  <div class="layout layout--default">
    <n-header class="layout__header" />
    <nuxt class="layout__content" />
    <n-footer class="layout__footer" />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    flex-shrink: 0;
    width: 100%;
  }

  &__header {
    & + .layout__content {
      margin-top: 100px;
    }
  }
  &__content {
    max-width: 1280px;
    :deep() {
      & > * {
        margin-bottom: 32px;
      }
    }
  }
}
</style>
