import { defineStore } from 'pinia'
import actions from './actions'
import { STORAGE_KEY } from 'src/consts'

export const useCompanyStore = defineStore('company', {
  state: () => ({
    companies: []
  }),
  getters: {
    defaultCompany: (state) => {
      if (!state.companies?.length) return null

      const defaultcompany = state.companies.find(item => item.default_company === '1')
      if (defaultcompany) return defaultcompany.id
      return state.companies[0].id
    }
  },
  actions,
  persist: {
    key: `${STORAGE_KEY}_company`,
    paths: ['companies']
  }
})
