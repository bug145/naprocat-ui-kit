import cloneDeep from 'lodash/cloneDeep';

export const state = () => ({
  items: [],
  city: undefined,
});

export const getters = {
  items: (state) => cloneDeep(state.items)?.slice(0, 4),
};

export const mutations = {
  SET_ITEMS(state, payload) {
    if (!payload.length && state.city !== payload.city) {
      state.items = [...payload.data];
    }
  },
  SET_CITY(state, payload) {
    state.city = payload;
  },
};

export const actions = {
  async fetch({ commit }) {
    // const city = await rootGetters['list/userSelectCity'];
    const city = 1;
    const res = await this.$axios.$get(`/banners?city_id=${city}`);
    commit('SET_ITEMS', { data: res, city });
    commit('SET_CITY', city);
  },
};
