/**
 flux: {
    components: [
      'Button',
      'Header',
      {
         name: 'Banners',
         store: true, // true by default
      },
    ],
    utils: {
      mobile: false, // true by default
    },
    layouts: {
      default: 'main',
      custom: 'another-layout',
    },
  }
 */

import {
  concat,
  forEach,
  get,
  isString,
  indexOf,
  reject,
  last,
  includes,
  mapValues,
  map,
  flatten,
  lowerCase,
} from 'lodash';
import {
  resolve,
  posix,
  dirname,
  join,
  sep,
} from 'path';
import { readdirSync } from 'fs';
import { glob } from 'glob';
import { defu } from 'defu';

const arrHas = (arr, needle) => indexOf(arr, needle) !== -1;

export default async function UiInstaller(moduleOptions) {
  const options = { ...this.options.flux, ...moduleOptions };

  const componentsDir = resolve(__dirname, 'components/N');
  const layoutsDir = resolve(__dirname, 'layouts');
  const componentsAll = readdirSync(componentsDir);

  let components = get(options, 'components', componentsAll);

  //----------------------------------------------------------------

  const layouts = get(options, 'layouts', {});

  const layoutsForRegistration = mapValues(layouts, (layoutName) => `flux-ui-kit/layouts/${layoutName}/index.vue`);
  const layoutDependencies = [];
  forEach(layouts, (layoutName) => {
    const tempPath = resolve(layoutsDir, layoutName);
    const folder = readdirSync(tempPath);
    if (arrHas(folder, 'dependencies.js')) {
      layoutDependencies.push(import(resolve(tempPath, 'dependencies.js')));
    }
  });

  const resolveLayoutDependencies = await Promise.all(layoutDependencies);
  components = concat(components, flatten(map(resolveLayoutDependencies, 'default')));
  this.options.layouts = defu(this.options.layouts, layoutsForRegistration);

  //----------------------------------------------------------------

  const findPatern = posix.normalize(`${componentsDir}/**/dependencies.js`);

  let dependencies = await glob(findPatern);

  dependencies = reject(dependencies, (dependency) => {
    const key = last(dirname(dependency).split(sep));
    return !includes(components, key);
  });

  const componentDependencies = [];
  forEach(dependencies, (dependency) => {
    const rootDir = resolve(__dirname, '../../');
    componentDependencies.push(import(resolve(rootDir, dependency)));
  });

  const resolveComponentDependencies = await Promise.all(componentDependencies);
  components = concat(components, flatten(map(resolveComponentDependencies, 'default')));

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

    const dirPath = join(componentsDir, `/${config.name}`);
    const dir = readdirSync(dirPath);

    this.nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: dirPath,
        pattern: '*.vue',
        prefix: `N${config.name}`,
      });
    });

    if (config.store && arrHas(dir, 'store.js')) {
      const { dst: storeModule } = this.addTemplate({
        src: join(dirPath, '/store.js'),
        fileName: `${lowerCase(config.name)}.store.module.js`,
      });

      const { dst: pluginDst } = this.addTemplate({
        src: resolve(__dirname, 'plugins/register-store.js'),
        fileName: `${lowerCase(config.name)}.store.plugin.js`,
        options: {
          name: config.name,
          module: storeModule,
        },
      });

      this.options.plugins.push(resolve(this.options.buildDir, pluginDst));
    }
  });

  const mobileDetector = get(options, 'utils.mobile', true);
  if (mobileDetector) {
    const { dst: devicePluginDst } = this.addTemplate({
      src: resolve(__dirname, 'plugins/mobile-detect.js'),
    });
    this.options.plugins.push(resolve(this.options.buildDir, devicePluginDst));
  }

  const { dst: configPluginDst } = this.addTemplate({
    src: resolve(__dirname, 'plugins/config.js'),
  });
  this.options.plugins.push(resolve(this.options.buildDir, configPluginDst));
}
