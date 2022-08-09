import { defineStore } from 'pinia'
import actions from './actions'

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
  actions
})
