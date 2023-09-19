<template>
  <div>
    <pre>{{ adjustedItems }}</pre>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NRecommended',
  props: {
    items: {
      type: Array,
      default: () => ([]),
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
    ...mapGetters({
      apiItems: 'recommended/items',
    }),
    adjustedItems() {
      return this.connect ? this.apiItems : this.items;
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
</style>
