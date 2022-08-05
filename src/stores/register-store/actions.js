import Api from 'services/registerService'

export default {
  async registerUser (payload) {
    try {
      await Api.register(payload)
    } catch (error) { }
  },

  reSendVerificationEmail () {
  // try {
  // } catch (error) { }
  }
}
