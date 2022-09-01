import { Dialog } from 'quasar'

export default {
  setPageTitle (payload) {
    this.pageTitle = payload
  },

  showBackButton (payload = null) {
    this.backButton = payload
  },

  setHeaderAction (payload) {
    this.headerAction = payload
  },

  /* ******** Attention!!! ******** */

  /* Don't use this in any of the Vue Life-Cycle-Hook.
  ** Otherwise it will create an endless loop. This
  ** method is costly. So, don't use it unless you
  ** really need to re-render your visual components.
  */
  reRenderComponent () {
    const randomKey = Math.random()
    this.reRenderKey = randomKey
  },

  resetAllStores () {
    this.stores.forEach(store => {
      store.$reset()
    })
  },

  /*
  *** Error can be handled locally rather than the global scope
  *** by sending a Boolean parameter.
  */
  handleErrorLocally (payload) {
    this.localErrorHandling = payload
  },

  renderAlertDialog ({ title, message, configs, confirm, cancel }) {
    if (!window.dialogCounter) window.dialogCounter = 1
    else window.dialogCounter++

    if (window.dialogCounter <= 1) {
      Dialog.create({
        html: true,
        title: title || 'Oops !!!',
        message,
        ...configs,
        ok: {
          ...confirm,
          flat: (confirm && confirm.flat) || true,
          label: (confirm && confirm.label) || 'Got It'
        },
        cancel: cancel || false
      })
        .onOk(() => {
          window.dialogCounter = null
          confirm && confirm.handler()
        })
        .onOk(() => { })
        .onCancel(() => {
          window.dialogCounter = null
        })
        .onDismiss(() => { window.dialogCounter = null })
    }
  },

  setLoading (payload = true) {
    this.loading = payload
  },

  setFetching (payload = true) {
    this.fetching = payload
  }
}
