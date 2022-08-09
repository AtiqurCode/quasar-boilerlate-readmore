import { defineStore } from 'pinia'
import actions from './actions'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userAuthInfo: {},
    userProfile: {},
    permissions: []
  }),
  getters: {
    apiToken: (state) => state.userAuthInfo && state.userAuthInfo.access_token,
    hasPermission: (state) => permission => state.permissions.some(item => item === permission)
  },
  actions,
  persist: {
    paths: ['userAuthInfo', 'userProfile', 'permissions']
  }
})
