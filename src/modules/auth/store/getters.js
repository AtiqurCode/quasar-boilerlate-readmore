export function apiToken (state) {
  return state.userAuthInfo && state.userAuthInfo.access_token
}

export const defaultCompany = state => {
  return state.defaultCompany
}

export const userProfile = state => {
  return { ...state.userProfile }
}

export const hasPermission = state => permission => {
  return state.permissions.some(item => item === permission)
}
