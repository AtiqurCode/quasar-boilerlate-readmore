import { defineStore } from 'pinia'
import actions from './actions'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userAuthInfo: {},
    userProfile: {},
    defaultCompany: '',
    permissions: []
  }),
  getters: {
    apiToken: (state) => state.userAuthInfo && state.userAuthInfo.access_token,
    defaultCompany: (state) => state.defaultCompany,
    userProfile: (state) => ({ ...state.userProfile }),
    hasPermission: (state) => permission => state.permissions.some(item => item === permission)
  },
  actions
})
