<template>
  <div class="burger">
    <img
      v-if="!burgerShow"
      class="burger__icon"
      src="@/assets/icons/burger-menu.svg"
      alt="burger"
      @click="burgerShow = true"
    />
    <img
      v-else
      class="burger__icon"
      src="@/assets/icons/close.svg"
      alt="burger"
      @click="burgerShow = false"
    />
    <div class="burger__menu" :class="{'burger__menu-show' : burgerShow}">
      <div class="burger__menu-item">
        <img
          class="burger__menu-icon"
          src="../../../assets/icons/icon_heart.svg?data"
          alt=""
        />
        <p class="burger__menu-text">
          Избранный
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NHeaderBurger',
  data() {
    return {
      burgerShow: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.burger {
  &__icon{
    width: 40px;
    height: 40px;
  }
  &__menu{
    position: fixed;
    top: 94px;
    right: -70vw;
    width: 70vw;
    height: 100vh;
    padding: 40px 22px;
    background-color: #fff;
    transition: .5s;
    @media (max-width: 992px) {
      top: 82px;
    }
  }
  &__menu-show{
    right: 0;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  }
  &__menu-close{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 20px;
    top: 20px;
  }
  &__menu-item{
    width: 100%;
    display: flex;
    align-items: center;
  }
  &__menu-icon{
    margin-right: 10px;
  }
}
</style>
