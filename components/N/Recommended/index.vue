<template>
  <div class="recommended">
    <n-briefcase
      class="recommended__content"
      :items="adjustedItems"
      label="Рекомендуемые"
      link="Смотреть все"
      :href="{name: 'index'}"
      :banner="undefined"
    />
    <n-button
      class="recommended__more"
      :pending="pending"
      v-if="!isLastPage"
      size="lg"
      @click="more">Посмотреть еще</n-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NReceommended',
  props: {
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
    };
  },
  async fetch() {
    if (this.connect) {
      await this.fetch();
    }
  },
  computed: {
    ...mapGetters('recommended', {
      apiItems: 'itemsUpToPage',
      isLastPage: 'isLastPage',
      pending: 'pending',
    }),
    adjustedItems() {
      return this.connect ? this.apiItems : this.items;
    },
  },
  methods: {
    ...mapActions({
      fetch: 'recommended/fetch',
      more: 'recommended/getNextPage',
    }),
  },
};
</script>

<style lang="scss" scoped>
.recommended {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 32px;
  &__more[class] {
    padding-left: 56px;
    padding-right: 56px;
  }
}
</style>
