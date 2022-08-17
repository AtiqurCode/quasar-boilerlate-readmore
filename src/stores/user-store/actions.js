import Api from 'services/userService'

export default {
  async updateUserProfile (payload) {
    try {
      const data = await Api.updateProfile(payload)
      this.userProfile = data
    } catch {}
  },

  resetPassword (payload) {
    Api.resetPassword(payload)
  },

  uploadImage (payload) {
    const formData = new FormData()
    formData.append('image', payload.imageFile)
    formData.append('entity', 'users')
    formData.append('id', payload.id)
    Api.uploadImage(formData)
  }
}
