<template>
  <n-briefcase
    :filters="filters"
    :filter.sync="filter"
    :items="adjustedItems"
    :label="label"
    link="Смотреть все"
    :href="{name: 'index'}"

    :banner="banner ? {} : undefined"
    :banner-placement="banner"
  />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NCollection',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    connect: {
      type: Boolean,
      default: true,
    },
    collectionSlug: {
      type: String,
      default: 'hits',
    },
    banner: {
      type: String,
      default: 'left',
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
      return this.connect ? this.apiItems : this.items;
    },
    label() {
      const titles = {
        hits: 'Хиты',
        best: 'Лучшее из мопедов',
        parts: 'Запчасти на все случаи жизни',
      };
      return titles[this.collectionSlug];
    },
  },
  watch: {
    filter() {
      this.fetch();
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
</style>
