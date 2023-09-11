import consola from 'consola';

export default function InitialModule(moduleOptions) {
  consola.info({ moduleOptions });
  consola.info({ pots: this.options });

  this.nuxt.hook('ready', async (nuxt) => {
    consola.info('Nuxt is ready');
    consola.info({ nuxt });
  });
}

module.exports.meta = require('./package.json');
