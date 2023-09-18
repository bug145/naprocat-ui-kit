<template>
  <nuxt-link to="/" @click.native="clickHandler">
    <img
      class="logo"
      :src="require('../../../assets/icons/logo.svg')"
      alt="logo"
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'NHeaderLogo',
  methods: {
    clickHandler() {
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
  }
</style>
