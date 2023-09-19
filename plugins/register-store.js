import { lowerCase } from "lodash";

export default async (ctx, inject) => {
  const { store } = ctx;
  const {
    name,
    module,
  } = <%= serialize(options) %>;

  import('./' + module).then(({default: storeModule}) => {
    store.registerModule(lowerCase(name), storeModule, {
      preserveState: process.client,
    });
  })
  
};
