import Api from '../api/auth'

export async function logUserIn ({ commit, dispatch }, payload) {
  const {
    data: {
      session,
      user_info: userInfo,
      companies
    }
  } = await Api.login(payload)

  commit('SET_USER_AUTH_INFO', session)
  commit('SET_USER_PROFILE', userInfo)
  commit('companies/SET_LOADED_COMPANIES', companies, { root: true })
  commit('SET_DEFAULT_COMPANY', getUserDefaultCompany(companies))
}

export function setDefaultCompany ({ commit, dispatch }, payload) {
  commit('SET_DEFAULT_COMPANY', payload)
  dispatch('common/reRenderComponent', null, { root: true })
}

export async function logOutUser ({ commit }) {
  await Api.logout()
  commit('common/RESET_MODULE_STATE', null, { root: true })
  this.$router.push('/auth')
}

const getUserDefaultCompany = companies => {
  const defaultcompany = companies && companies.find(item => item.default_company === '1')

  if (defaultcompany) return defaultcompany.id

  return companies[0].id
}

export function forgotPassword ({ commit }, userData) {
  return Api.forgotPassword(userData)
}
