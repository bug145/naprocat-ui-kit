<template>
  <div>
    <img class="burger" src="@/assets/icons/burger-menu.svg" alt="burger" />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import burgerIcon from '@/assets/icons/burger-menu.svg?data';

export default {
  name: 'NHeaderBurger',
  // eslint-disable-next-line vue/no-unused-components
  components: { burgerIcon },
};
</script>

<style lang="scss" scoped>
.burger {
  width: 40px;
  height: 40px;
}
.avatar{
  width: 40px;
  height: 40px;
  border: 3px solid var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  @include breakpoint.down(md) {
    width: 56px;
    height: 56px;
  }
  &__moderation{
    width: 20px;
    position: absolute;
    top: -4px;
    right: -4px;
  }
  &__none{
    width: 46px;
    height: 46px;
    border-radius: 50%;
    font-family: var(--font-rubik);
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
  }
  &__block{
    position: relative;
    &:hover{
      .avatar__text{
        color: var(--primary-color);
      }
      .avatar{
        opacity: .9;
      }
    }
  }
  &__text{
    max-width: 200px;
    white-space: nowrap;
    padding-top: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #333333;
    transition: .2s;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);

    overflow: hidden;
    @include breakpoint.down(md) {
      display: none;
    }
  }
  &__load{
    width: 46px;
    height: 46px;
  }
}
</style>
