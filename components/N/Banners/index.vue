<template>
  <div>
    <ssr-carousel
      v-if="carousel"
      :slides-per-page="slidesPerPage"
      :gutter="10"
      :peek-right="40"
      :overflow-visible="fullWidth"
      class="carousel"
    >
      <n-banner-item
        v-for="item in adjustedItems"
        :key="item.id"
        :item="item"
        :variant="variant"
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
import SsrCarousel from 'vue-ssr-carousel';
import 'vue-ssr-carousel/index.css';

export default {
  name: 'NBanners',
  components: {
    SsrCarousel,
  },
  props: {
    carousel: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => ([]),
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (variant) => [
        'primary',
        'secondary',
      ].includes(variant),
    },
    connect: {
      type: Boolean,
      default: true,
    },
    fullWidth: {
      // works with carousel
      type: Boolean,
      default: false,
    },
  },
  async fetch() {
    if (this.connect) {
      await this.fetch();
    }
  },
  computed: {
    ...mapGetters({
      apiItems: 'banners/items',
    }),
    adjustedItems() {
      return this.connect ? this.apiItems : this.items;
    },
    slidesPerPage() {
      const slides = {
        primary: 1,
        secondary: 3,
      };
      return slides[this.variant];
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
