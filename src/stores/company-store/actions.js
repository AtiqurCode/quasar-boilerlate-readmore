// import Api from 'services/authService'
import { useCommonStore } from 'stores/common-store'

export default {
  setDefaultCompany (payload) {
    // TODO: need to change setdefaultcompany logic. api call is recommanded

    if (!this.companies.some(com => com.id === payload)) return

    this.companies.map(com => {
      if (com.id === payload) {
        return {
          ...com,
          default_company: '1'
        }
      }
      return {
        ...com,
        default_company: '0'
      }
    })

    const commonStore = useCommonStore()
    commonStore.reRenderComponent()
  }
}
