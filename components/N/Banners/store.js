const state = () => ({
  items: {},
  city: undefined,
});

const getters = {
  items: (state) => state.items[state.city],
};

const mutations = {
  SET_ITEMS(state, payload) {
    // eslint-disable-next-line no-underscore-dangle
    this._vm.$set(state.items, [payload.city], payload.data);
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
