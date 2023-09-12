import { lowerCase } from "lodash";

export default async ({ app, store }, inject) => {
  const {
    name,
    storeModule,
  } = <%= serialize(options) %>;

  store.registerModule(lowerCase(name), storeModule);
};
