<template>
  <div class="items__wrapper">
    <div class="items__header">
      <p class="items__label">
        {{ label }}
      </p>
    </div>
    <div class="items__banner">
      <img class="temp-banner" src="http://placekitten.com/200/300" />
    </div>
    <div class="items__body">
      <ssr-carousel :slides-per-page="4" class="carousel" :gutter="16">
        <div v-for="(column, i) in adjustedItems" :key="i" class="carousel__item products">
          <n-product
            v-for="item in column"
            :key="item.id"
            class="products__item"
            :item="item"
          />
        </div>
      </ssr-carousel>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SsrCarousel from 'vue-ssr-carousel';
import 'vue-ssr-carousel/index.css';
import { chunk } from 'lodash';

export default {
  name: 'NRecommended',
  components: {
    SsrCarousel,
  },
  props: {
    label: {
      type: String,
      default: 'Рекомендации',
    },
    items: {
      type: Array,
      default: () => [],
    },
    connect: {
      type: Boolean,
      default: true,
    },
  },
  async fetch() {
    if (this.connect) {
      await this.fetch();
    }
  },
  computed: {
    ...mapGetters('recommended', {
      apiItems: 'pageItems',
    }),
    adjustedItems() {
      const items = this.connect ? this.apiItems : this.items;
      return chunk(items, 2);
    },
  },
  methods: {
    ...mapActions({
      fetch: 'recommended/fetch',
    }),
  },
};
</script>

<style lang="scss" scoped>
.temp-banner {
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.items {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
  }

  &__header {
    grid-area: 1 / 1 / 2 / 6;
  }
  &__banner {
    grid-area: 2 / 1 / 4 / 2;
  }
  &__body {
    grid-area: 2 / 2 / 4 / 6;
  }
}

.carousel {
  &__item {
    display: flex;
    grid-gap: 16px;
    flex-direction: column;
  }
}
</style>
