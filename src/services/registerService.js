import client from './client'

export default {
  register (payload) {
    return client().post('register', payload, { requiresAuth: false, notifyOptions: { message: 'Successfully submitted' } })
  }
}
