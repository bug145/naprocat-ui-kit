<template>
  <div class="header">
    <div class="header__block">
      <n-header-logo />
      <n-header-city v-if="city && !mobile" />
      <input v-if="!mobile" type="text" class="header__center pr" />
      <n-header-links v-if="!mobile" />
      <n-header-avatar v-if="avatar && !mobile" />
      <n-header-burger v-if="mobile" />
    </div>
  </div>
</template>

<script>
import NHeaderLogo from '~/components/N/Header/logo.vue';
import NHeaderCity from '~/components/N/Header/city.vue';
import NHeaderLinks from '~/components/N/Header/links.vue';
import NHeaderAvatar from '~/components/N/Header/avatar.vue';

export default {
  name: 'NHeader',
  components: {
    NHeaderAvatar, NHeaderLinks, NHeaderCity, NHeaderLogo,
  },
  props: {
    city: Boolean,
    avatar: Boolean,
    mobile: {
      type: Boolean,
      default: true,
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
      //display: grid;
      //grid-gap: 20px;
      //grid-template-columns: repeat(2, 1fr);
      //grid-template-rows: repeat(2, 1fr);
      width: 100%;
      padding: 18px 22px 20px;
    }
  }
  &--border{
    border-bottom: 4px solid var(--primary-color);
  }
  &__bottom-load{
    height: 4px;
    //width: 100%;
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
