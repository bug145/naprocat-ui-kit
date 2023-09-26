<template>
  <div class="search">
    <input type="text" class="search__input" />
  </div>
</template>
<script>
export default {
  name: 'NHeaderSearch',
};
</script>

<style scoped lang="scss">
.search {
  &__input {
    border-radius: 12px 0px 0px 12px;
    background: var(--white, #FFF);
    display: flex;
    height: 40px;
    padding: 0px 16px;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
    border: 1px solid var(--gray-100, #F1F2F3);
    appearance: none;
  }
}
</style>
