export default function ExampleModule(moduleOptions) {
  console.log(moduleOptions.token);
  console.log(this.options.exampleMsg);

  this.nuxt.hook('ready', async (nuxt) => {
    console.log('Nuxt is ready');
    console.log({ nuxt });
  });
}

// REQUIRED if publishing the module as npm package
module.exports.meta = require('./package.json');
