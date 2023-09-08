import Vue from 'vue';
// import storeModule from './store';
import vueComponent from './index.vue';

export default (context) => {
  // const {
  //   store: rootVuex,
  // } = context;

  const {
    component = true,
    // store = true,
  } = context.$config || {};

  if (component) {
    Vue.component('NBbanners', vueComponent);
  }

  // if (store) {
  //   rootVuex.registerModule('banners', storeModule);
  // }
};
