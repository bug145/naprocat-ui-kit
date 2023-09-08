<template>
  <div>
    <ssr-carousel
      v-if="carousel"
      :slides-per-page="1"
      :gutter="10"
      :peek-right="40"
      class="carousel"
    >
      <n-banner-item
        v-for="item in adjustedItems"
        :key="item.id"
        :item="item"
        class="carousel__item"
      />
    </ssr-carousel>
    <div v-else class="banner">
      <n-banner-item
        v-for="item in adjustedItems"
        :key="item.id"
        :item="item"
        class="banner__item"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NBanners',
  props: {
    carousel: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    connect: {
      type: Boolean,
      default: true,
    },
  },
  fetch() {
    if (this.connect) {
      this.fetch();
    }
  },
  computed: {
    ...mapGetters({
      apiItems: 'banners/items',
    }),
    adjustedItems() {
      return this.connect ? this.apiItems : this.items;
    },
  },
  methods: {
    ...mapActions({
      fetch: 'banners/fetch',
    }),
  },
};
</script>

<style lang="scss" scoped>
.banner {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  &__item {
    height: 250px;
  }
}
.carousel {
  &__item {
    height: 520px;
    @include breakpoint.down(md) {
      height: 180px;
    }
  }
}
</style>
