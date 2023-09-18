<template>
  <div class="header">
    <div class="header__block">
      <n-header-logo />
      <n-header-city v-if="!compact" />
      <input v-if="!compact" type="text" class="header__center pr" />
      <n-header-links v-if="!compact" />
      <n-header-avatar v-if="!compact && hasAuth" />
      <n-header-burger v-if="compact" />
    </div>
  </div>
</template>

<script>
import get from 'lodash/get';

export default {
  name: 'NHeader',
  computed: {
    hasAuth() {
      return get(this.$flux, 'profile', false);
    },
    compact() {
      return get(this.$device, 'isMobile', true);
    },
  },
};
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  box-shadow: 1px 2px 3px rgb(0 0 0 / 0.03);
  max-width: 100vw;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  background: var(--header-background, white);
  @include breakpoint.down(md) {
    position: inherit;
  }
  &__block{
    width: 100%;
    max-width: 1024px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 27px 0 23px 0;
    @include breakpoint.down(md) {
      width: 100%;
      padding: 18px 22px 20px;
    }
  }
  &--border{
    border-bottom: 4px solid var(--primary-color);
  }
  &__bottom-load{
    height: 4px;
    background-color: var(--danger-color);
  }
  &--only-search[class] {
    .header {
      &__block {
        display: flex;
      }
    }
    :deep(.search__filter) {
      display: none;
    }
    :deep(.nav-search__back) {
      display: block;
    }
  }
  &__center{
    width: 100%;
    margin: 0 20px;
    @include breakpoint.down(md) {
      margin: 0;
      grid-area: 2 / 1 / 3 / 3;
      display: flex;
      grid-gap: 8px;
      & > div {
        width: 100%;
      }
    }
  }
  &__right{
    @include breakpoint.down(md) {
      width: unset;
      justify-content: flex-end;
      grid-gap: 22px;
    }
  }
}

</style>
