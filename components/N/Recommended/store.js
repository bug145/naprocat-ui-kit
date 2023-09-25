import {
  flatten, forEach, get, set, take,
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
  isLastPage: (state) => state.totalPage <= state.currentPage,
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
    const { meta, data } = payload;
    const page = meta.current_page;
    const index = page - 1;

    state.currentPage = page;
    state.itemsInPage = meta.per_page;
    state.totalPage = meta.last_page;

    const temp = JSON.parse(JSON.stringify(state.items));
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
        'filters[per_page]': 10,
      },
    }).then((response) => {
      commit('SET_ITEMS', response);
    }).finally(() => {
      commit('PENDING', false);
    });
  },
  getNextPage({state, commit, dispatch}) {
    if(state.isLastPage) {
      return;
    }
    commit('SET_CURRENT_PAGE', state.currentPage + 1);
    dispatch('fetch');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
}