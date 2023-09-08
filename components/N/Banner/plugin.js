import Vue from 'vue';

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
  }

  if (store) {
    import('./store')
      .then((storeModule) => {
        rootVuex.registerModule('banners', storeModule.default);
      });
  }
};
