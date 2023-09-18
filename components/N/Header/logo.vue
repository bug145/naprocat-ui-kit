<template>
  <img
    class="logo"
    :src="require('@/assets/icons/logo.svg')"
    alt="logo"
    @click="clickLogo"
  />
</template>

<script>
export default {
  name: 'NHeaderLogo',
  methods: {
    clickLogo() {
      if (this.$route.path === '/') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .logo{
    width: 180px;
    height: 26.06px;
    cursor: pointer;
    //background-image: url('@/assets/icons/logo.svg?data');
    //background-repeat: no-repeat;
    //background-size: contain;
    //background-position: center;
    //border:none;
    //outline: none;
    //display: block;
    @include breakpoint.down(xl) {
      //width: 150px;
    }
    @include breakpoint.down(md) {
      //display: none;
    }
  }
</style>
