<template>
  <div class="location">
    <markerIcon class="location__icon" />
    <p class="location__label">Весь Казахстан</p>
  </div>
</template>

<script>
import markerIcon from '../../../assets/icons/header/marker.svg?inline';

export default {
  name: 'NHeaderLocation',
  components: {
    markerIcon,
  },
};
</script>

  <style lang="scss" scoped>
  .location {
    display: flex;
    align-items: center;
    grid-gap: 8px;
    &__icon {
      width: 16px;
      height: 16px;
      :deep(path:first-of-type) {
        stroke: var(--color-primary, royalblue);
      }
      :deep(path:nth-of-type(2)) {
        stroke: var(--color-primary, royalblue);
        fill: var(--color-primary, royalblue);
      }
    }
    &__label {
      color: var(--secondary-500, #3E4157);
      font-size: 14px;
      user-select: none;
      font-weight: 700;
      line-height: normal;
    }
  }
  </style>
