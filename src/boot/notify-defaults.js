import { Notify } from 'quasar'

Notify.setDefaults({
  position: 'bottom-right',
  message: 'Successfully executed',
  timeout: 3000,
  type: 'positive',
  classes: 'no-shadow',
  actions: [
    { icon: 'close', size: 'sm', color: 'white' }
  ]
})
