import Api from 'services/registerService'

export default {
  async registerUser (payload) {
    try {
      await Api.register(payload)
    } catch (error) {
      return Promise.reject(error)
    }
  },

  reSendVerificationEmail () {
  // try {
  // } catch (error) { }
  }
}
