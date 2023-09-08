import cloneDeep from 'lodash/cloneDeep';
import consola from 'consola';

const state = () => ({
  items: {},
  city: undefined,
});

const getters = {
  items: (state) => cloneDeep(state.items[state.city]),
};

const mutations = {
  SET_ITEMS(state, payload) {
    const temp = cloneDeep(state.items);
    temp[payload.city] = payload.data;
    state.items = temp;
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
    consola.info({ res, city });
    commit('SET_ITEMS', { data: res.data, city });
    commit('SET_CITY', city);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
