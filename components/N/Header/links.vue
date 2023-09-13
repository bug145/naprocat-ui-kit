<template>
  <div class="header-links">
    <p
      id="favoritesButton"
      class="header-links__item"
      @click="$router.push('#')"
    >
      <img
        v-if="$route.path === '/favorites/'"
        class="header-links__item-icon"
        src="../../../assets/icons/icon_heart_active.svg?data"
        alt=""
      />
      <img
        v-else
        class="header-links__item-icon"
        src="../../../assets/icons/icon_heart.svg?data"
        alt=""
      />
    </p>
    <p
      class="header-links__item header-links--notifications pr"
      @click="$router.push('#')"
    >
      <img
        v-if="$route.path === '/notification/'"
        class="header-links__item-icon"
        src="../../../assets/icons/icon_bell_active.svg?data"
        alt=""
      />
      <img
        v-else
        class="header-links__item-icon"
        src="../../../assets/icons/icon_bell.svg?data"
        alt=""
      />
      <span
        v-if="false"
        class="header-links--notifications-count"
      ></span>
    </p>
    <p
      class="header-links__item"
      @click="$router.push('#')"
    >
      <img
        v-if="$route.path === '/chat/'"
        class="header-links__item-icon"
        src="../../../assets/icons/icon_email_active.svg?data"
        alt=""
      />
      <img
        v-else
        class="header-links__item-icon"
        src="../../../assets/icons/icon_email.svg?data"
        alt=""
      />
    </p>
  </div>
</template>

<script>
export default {
  name: 'NHeaderLinks',
};
</script>

<style lang="scss" scoped>
.header-links{
  min-width: 110px;
  margin: 0 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include breakpoint.down(md) {
    min-width: inherit;
    margin: 0;
  }
  &__item {
    cursor: pointer;
    @include breakpoint.down(md) {
      display: none;
    }
    &-icon {
      width: 20px;
      transform: scale(1);
      transition: .1s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  &--notifications{
    @include breakpoint.down(md) {
      display: block;
    }
    &-count{
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: red;
      display: block;
      position: absolute;
      right: -3px;
      bottom: 3px;
      border: 3px solid white;
    }
  }
}
</style>
