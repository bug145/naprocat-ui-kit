import Vue from 'vue';
import storeModule from './store';

export default (context) => {
  const {
    store: rootVuex,
  } = context;

  const {
    component = true,
    store = true,
  } = context.$config || {};

  if (component) {
    import('./index.vue')
      .then((vueComponent) => {
        Vue.component('NBanners', vueComponent.default);
      });
    import('../BannerItem/index.vue')
      .then((vueComponent) => {
        Vue.component('NBannerItem', vueComponent.default);
      });
    import('../Badge/index.vue')
      .then((vueComponent) => {
        Vue.component('NBadge', vueComponent.default);
      });
  }

  if (store) {
    rootVuex.registerModule('banners', storeModule);
  }
};
