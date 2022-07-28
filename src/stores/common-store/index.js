import { defineStore } from 'pinia'
import { DEFAULT_PAGE_TITLE } from 'src/consts'
import actions from './actions'

export const useCommonStore = defineStore('common', {
  state: () => ({
    pageTitle: DEFAULT_PAGE_TITLE,
    localErrorHandling: false,
    headerAction: null,
    reRenderKey: 1,
    loading: false,
    fetching: false
  }),
  getters: {
    isLocalErrorHandling: (state) => state.localErrorHandling,
    gLoading: (state) => state.loading
  },
  actions
})
