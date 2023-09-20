/* eslint-disable import/no-unresolved */
import lowerCase from 'lodash/lowerCase';
import storeModule from './<%= options.module %>';

export default async (ctx) => {
  const { store } = ctx;
  const moduleName = lowerCase('<%= options.name %>');

  store.registerModule(moduleName, { ...storeModule, namespaced: true }, {
    preserveState: store.hasModule(moduleName) || process.client,
  });
};
