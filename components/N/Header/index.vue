<template>
  <div class="header__wrapper">
    <div class="header">
      <n-header-logo class="header__logo" />
      <n-header-search class="header__search" />
      <n-header-city class="header__location" />
      <n-avatar size="lg" class="header__avatar" />
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
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--breakpoint-xl, 1200px);
  padding: 16px 0;
  &__wrapper {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--gray-100, #F1F2F3);
    background: var(--white, #FFF);
  }
  &__logo {
    margin-right: 38px;
  }
  &__search {
    margin-right: 38px;
  }
  &__location {
    margin-right: 24px;
  }
}

</style>
