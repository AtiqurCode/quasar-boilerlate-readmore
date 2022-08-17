import { defineStore } from 'pinia'
import actions from './actions'
import { STORAGE_KEY } from 'src/consts'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userAuthInfo: {},
    permissions: []
  }),
  getters: {
    apiToken: (state) => state.userAuthInfo && state.userAuthInfo.access_token,
    hasPermission: (state) => permission => state.permissions.some(item => item === permission)
  },
  actions,
  persist: {
    key: `${STORAGE_KEY}_auth`,
    paths: ['userAuthInfo', 'permissions']
  }
})
