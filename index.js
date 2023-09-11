import consola from 'consola';
import {
  concat,
  forEach,
  get,
  isString,
  indexOf,
  lowerCase,
} from 'lodash';
import {
  resolve,
  posix,
  join,
} from 'path';
import { readdirSync } from 'fs';
import { glob } from 'glob';
import Vue from 'vue';

import { useStore, defineNuxtModule } from '@nuxt/kit';

const arrHas = (arr, needle) => indexOf(arr, needle) !== -1;

export default defineNuxtModule({
  async setup(moduleOptions, nuxt) {
    const options = { ...nuxt.options.flux, ...moduleOptions };

    const componentsDir = resolve(__dirname, 'components/N');
    const componentsAll = readdirSync(componentsDir);

    let components = get(options, 'components', componentsAll);

    const findPatern = posix.normalize(`${componentsDir}/**/dependencies.js`);

    const dependencies = await glob(findPatern);

    forEach(dependencies, async (dependency) => {
      const rootDir = resolve(__dirname, '../../');

      const { default: res } = await import(resolve(rootDir, dependency));

      components = concat(components, res);
    });

    setTimeout(() => {
      components.forEach(async (item) => {
        const config = {
          store: true,
          router: true,
          name: undefined,
        };

        if (isString(item)) {
          config.name = item;
        } else {
          const itemName = get(item, 'name', undefined);
          const itemRouter = get(item, 'router', true);
          const itemStore = get(item, 'store', true);

          config.name = itemName;
          config.router = itemRouter;
          config.store = itemStore;
        }

        const dirPath = join(componentsDir, config.name);
        const dir = readdirSync(dirPath);

        if (arrHas(dir, 'store.js') && config.store) {
          const storePath = join(dirPath, '/store.js');

          const { default: storeModule } = await import(storePath);

          // nuxt.$store.registerModule(lowerCase(config.name), storeModule);
        }

        if (arrHas(dir, 'index.vue')) {
          const componentPath = join(dirPath, '/index.vue');
          const componentName = `N${config.name}`;

          const { default: vueComponent } = await import(componentPath);

          // import(componentPath)
          //   .then((vueComponent) => {
          //     // Vue.component('NBannerItem', vueComponent.default);
          //   });

          consola.info({ vueComponent });

          // Vue.component(componentName, () => import(componentPath));
        }
      });
    }, 0);
  },

});

module.exports.meta = require('./package.json');
