<template>
  <div class="items__wrapper">
    <div class="items__header">
      <n-section-header label="Хиты аренды" link="Смотреть все" :href="{name: 'index'}" />
      <n-radio-buttons v-model="filter" :items="filters" @input="fetch" />
    </div>
    <div class="items__banner">
      <n-ad-vertical />
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
  name: 'NCollection',
  components: {
    SsrCarousel,
  },
  props: {
    label: {
      type: String,
      default: 'Коллекция',
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
  data() {
    return {
      filters: [
        {
          text: 'Популярное',
          value: '1',
        },
        {
          text: 'Термосумки',
          value: '2',
        },
        {
          text: 'Шлемы',
          value: '3',
        },
        {
          text: 'Внешние аккумуляторы',
          value: '4',
        },
        {
          text: 'GPS',
          value: '5',
        },
        {
          text: 'Держатели для телефона',
          value: '6',
        },
      ],
      filter: '1',
    };
  },
  async fetch() {
    if (this.connect) {
      await this.fetch();
    }
  },
  computed: {
    ...mapGetters('collection', {
      apiItems: 'pageItems',
    }),
    adjustedItems() {
      const items = this.connect ? this.apiItems : this.items;
      return chunk(items, 2);
    },
  },
  methods: {
    ...mapActions({
      fetch: 'collection/fetch',
    }),
  },
};
</script>

<style lang="scss" scoped>
.items {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 24px;
  }

  &__header {
    grid-area: 1 / 1 / 2 / 6;
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
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
