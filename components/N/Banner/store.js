import cloneDeep from 'lodash/cloneDeep';

const state = () => ({
  items: [],
  city: undefined,
});

const getters = {
  items: (state) => cloneDeep(state.items)?.slice(0, 4),
};

const mutations = {
  SET_ITEMS(state, payload) {
    if (!payload.length && state.city !== payload.city) {
      state.items = [...payload.data];
    }
  },
  SET_CITY(state, payload) {
    state.city = payload;
  },
};

const actions = {
  async fetch({ commit }) {
    // const city = await rootGetters['list/userSelectCity'];
    const city = 1;
    const res = await this.$axios.$get(`/banners?city_id=${city}`);
    commit('SET_ITEMS', { data: res, city });
    commit('SET_CITY', city);
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
