export const SET_USER_AUTH_INFO = (state, payload) => {
  state.userAuthInfo = payload
}

export const SET_USER_PROFILE = (state, payload) => {
  state.userProfile = payload
}

export const SET_DEFAULT_COMPANY = (state, payload) => {
  state.defaultCompany = payload
}

export const SET_USER_NAME = (state, payload) => {
  state.userProfile = { ...state.userProfile, ...payload }
}
