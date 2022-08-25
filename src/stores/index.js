import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import getAllPiniaStores from './plugins/get-all-pinia-stores'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  pinia.use(getAllPiniaStores)

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
