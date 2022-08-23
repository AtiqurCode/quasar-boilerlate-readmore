const stores = []

export default function getAllPiniaStores ({ store }) {
  stores.push(store)
  return { stores }
}
