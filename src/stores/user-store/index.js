import { defineStore } from 'pinia'
import actions from './actions'
import { STORAGE_KEY } from 'src/consts'

export const useUserStore = defineStore('user', {
  state: () => ({
    userProfile: {}
  }),
  actions,
  persist: {
    key: `${STORAGE_KEY}_user`,
    paths: ['userProfile']
  }
})
