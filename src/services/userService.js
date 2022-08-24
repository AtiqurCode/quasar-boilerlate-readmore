import client from './client'

export default {
  updateProfile (payload) {
    return client().post(`users/${payload.id}`, payload)
  },
  changePassword ({ payload, id }) {
    return client().post(`change/password/${id}`, payload, { notifyOptions: { message: 'Password changed successfully' } })
  },
  uploadImage (payload) {
    return client().post('upload', payload)
  }
}
