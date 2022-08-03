import Api from 'services/authService'
import { useCommonStore } from 'stores/common-store'

export default {
  getUserDefaultCompany (companies) {
    const defaultcompany = companies && companies.find(item => item.default_company === '1')

    if (defaultcompany) return defaultcompany.id

    return companies[0].id
  },

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
    // commit('companies/SET_LOADED_COMPANIES', companies, { root: true })
    this.defaultCompany = this.getUserDefaultCompany(companies)
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
    this.$router.push('/auth')
  },

  forgotPassword (userData) {
    return Api.forgotPassword(userData)
  }
}
