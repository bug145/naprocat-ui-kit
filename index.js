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
  mapValues,
  map,
  flatten,
  lowerCase,
} from 'lodash';
import {
  resolve,
  join,
} from 'path';
import { readdirSync } from 'fs';
import { defu } from 'defu';

const arrHas = (arr, needle) => indexOf(arr, needle) !== -1;

export default async function UiInstaller(moduleOptions) {
  const options = { ...this.options.flux, ...moduleOptions };

  const componentsDir = resolve(__dirname, 'components/N');
  const layoutsDir = resolve(__dirname, 'layouts');
  const componentsAll = readdirSync(componentsDir);

  let components = get(options, 'components', componentsAll);

  // Подключение layouts
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

  // Поиск компонентов и их зависимостей
  const dependencyConnector = async (items) => {
    if (!items.length) {
      return;
    }

    const connectDeps = [];
    forEach(items, (item) => {
      const componentFolderPath = resolve(componentsDir, item);

      const componentFolder = readdirSync(componentFolderPath);
      if (arrHas(componentFolder, 'dependencies.js')) {
        connectDeps.push(import(resolve(componentFolderPath, 'dependencies.js')));
      }
    });

    const resolvedConnectDeps = await Promise.all(connectDeps);

    const childComponentDependencies = flatten(map(resolvedConnectDeps, 'default'));
    components = concat(components, childComponentDependencies);

    await dependencyConnector(childComponentDependencies);
  };

  await dependencyConnector(components);
  //----------------------------------------------------------------

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
      const { dst: storeModule } = await this.addTemplate({
        src: join(dirPath, '/store.js'),
        fileName: `${lowerCase(config.name)}.store.module.js`,
      });

      const { dst: pluginDst } = await this.addTemplate({
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
