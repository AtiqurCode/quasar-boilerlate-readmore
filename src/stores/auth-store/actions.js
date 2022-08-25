import Api from 'services/authService'
import { useCommonStore } from 'stores/common-store'
import { useCompanyStore } from 'stores/company-store'
import { useUserStore } from 'stores/user-store'

const commonStore = useCommonStore()
const companyStore = useCompanyStore()
const userStore = useUserStore()

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
    userStore.userProfile = userInfo
    companyStore.companies = companies
  },

  async logOutUser () {
    // await Api.logout()

    commonStore.resetAllStores()
    this.router.push({ name: 'login' })
  },

  forgotPassword (payload) {
    return Api.forgotPassword(payload)
  },

  changePassword (payload) {
    return Api.changePassword(payload)
  },

  reSendVerificationCode (payload) {
    // return Api.reSendVerificationCode(payload)
  }
}
