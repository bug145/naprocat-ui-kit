<template>
  <div class="header">
    <p class="header__label">{{label}}</p>
    <nuxt-link :to="href" class="header__link" v-if="link && href">{{link}}</nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'SectionHeaderLabel',
  props: {
    label: {
      type: String,
      default: 'Заголовок',
    },
    link: {
      type: String,
      default: undefined,
    },
    href: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__label {
    color: var(--secondary-500, #3E4157);
    font-size: 26px;
    font-weight: 900;
    line-height: 123.077%;
  }
  &__link {
    color: var(--secondary-400, #6D758F);
    font-size: 14px;
    font-weight: 500;
    line-height: 114.286%;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>