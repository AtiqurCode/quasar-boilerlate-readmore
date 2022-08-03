import Api from '../api/register'

export const registerUser = async ({ commit }, payload) => {
  try {
    await Api.register(payload)
  } catch (error) { }
}

export const reSendVerificationEmail = async ({ commit }, payload) => {
  try {
  } catch (error) { }
}
