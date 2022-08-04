import client from './client'

/**
 * @module Auth/api/auth
 * @description Users' auth wrapper
 */
export default {
  /**
   * @method
   * @async
   * @description API to login a user
   * @author Shakil Islam<sm.shakil@itconquest.com>
   * @param {Object} params - User credentials (email and password)
   * @returns {Promise} User - User Information for success login
   * @throws {Promise} ErrorUserLogin - error promise object
   */
  login ({ data, service = undefined }) {
    return client(service).post('login', data, { requiresAuth: false, notifyOptions: { message: 'Logged in successfully' } })
  },

  /**
   * @description Api to logout a already loggedin user
   * @async
   * @returns {Promise} void
   */
  logout () {
    return client().delete('logout', { requiresAuth: false, notifyOptions: { message: 'User logged out successfully' } })
  },
  forgotPassword (payload) {
    return client().post('forgotpassword', payload, { requiresAuth: false, noNotification: true })
  }
}
