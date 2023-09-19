import {
  take, flatten, get, set,
} from 'lodash';

const state = () => ({
  items: [],
  pending: false,
  currentPage: 1,
  totalPage: 1,
  itemsInPage: 20,
});

const getters = {
  pageItems: (state) => get(state.items, state.currentPage - 1, null),
  itemsUpToPage: (state) => {
    const items = take(state.items, state.currentPage);
    return flatten(items);
  },
  currentPage: (state) => state.currentPage,
  totalPage: (state) => state.totalPage,
  pending: (state) => state.pending,
};

const mutations = {
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;

    if (state.currentPage < 1) {
      state.currentPage = 1;
    } else if (state.currentPage > state.totalPage) {
      state.currentPage = state.totalPage;
    }
  },
  PENDING(state, payload) {
    state.pending = payload;
  },
  SET_ITEMS(state, payload) {
    const page = payload?.current_page;
    const index = page - 1;
    const { data } = payload;
    const temp = JSON.parse(JSON.stringify(state.items));

    state.currentPage = page;
    state.itemsInPage = payload.per_page;
    state.totalPage = payload.last_page;

    set(temp, index, data);
    state.items = temp;
  },
};

const actions = {
  async fetch({ commit, state }) {
    commit('PENDING', true);
    await this.$axios.$get('/products', {
      params: {
        page: state.currentPage,
        city_id: 1,
        'filters[in_random]': 1,
        'filters[per_page]': 12,
      },
    }).then((response) => {
      commit('SET_ITEMS', response);
    }).finally(() => {
      commit('PENDING', false);
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
