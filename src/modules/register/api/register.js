import { client } from 'boot/client'

export default {
  register (payload) {
    return client().post('register', payload, { noAuthRequired: true, noNotification: true })
  }
}
