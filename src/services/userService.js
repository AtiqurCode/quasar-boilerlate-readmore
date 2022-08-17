import client from './client'

export default {
  updateProfile (payload) {
    return client().post(`users/${payload.id}`, payload)
  },
  resetPassword (payload) {
    return client().post('changepassword', payload)
  },
  uploadImage (payload) {
    return client().post('upload', payload)
  }
}
