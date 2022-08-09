import Api from 'services/authService'
import { useCommonStore } from 'stores/common-store'
import { useCompanyStore } from 'stores/company-store'

const companyStore = useCompanyStore()

export default {
  async logUserIn (payload) {
    const {
      data: {
        session,
        user_info: userInfo,
        companies
      }
    } = await Api.login(payload)

    this.userAuthInfo = session
    this.userProfile = userInfo
    companyStore.companies = companies
  },

  setDefaultCompany (payload) {
    this.defaultCompany = payload

    const commonStore = useCommonStore()
    commonStore.reRenderComponent()
  },

  async logOutUser () {
    await Api.logout()

    const commonStore = useCommonStore()
    commonStore.reRenderComponent()
    // TODO: Reset all stores
    commonStore.$reset()
    this.$reset()
    this.router.push({ name: 'login' })
  },

  forgotPassword (userData) {
    return Api.forgotPassword(userData)
  }
}
