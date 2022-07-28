import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { API_URL, APP_ID } from 'src/consts'
import { useCommonStore } from 'stores/common-store'

let client

export default boot(({ store }) => {
  const commonStore = useCommonStore(store)
  console.log('store', commonStore)
  client = (serviceName = 'default') => {
    const accessToken = store.getters['auth/apiToken']
    const isLocalErrorHandling = commonStore.isisLocalErrorHandling
    const defaultCompany = store.getters['auth/defaultCompany']
    let showNotification = true
    let notifyOptions = false

    const options = {
      baseURL: API_URL(serviceName)
    }

    if (accessToken) {
      options.headers = {
        Accept: 'application/json',
        'app-id': APP_ID,
        'company-id': defaultCompany,
        'Access-Token': accessToken
      }
    } else {
      options.headers = {
        Accept: 'application/json',
        'app-id': APP_ID
      }
    }

    const axiosInstance = axios.create(options)

    axiosInstance.interceptors.request.use(
      handleRequestSuccess, handleRequestError
    )

    axiosInstance.interceptors.response.use(
      handleResponseSuccess, handleResponseError
    )

    function handleRequestSuccess (request) {
      if (request.noNotification) showNotification = false
      if (request.notifyOptions) notifyOptions = request.notifyOptions
      if (accessToken) {
        request = {
          ...request,
          url: `companies/${defaultCompany}/${request.url}`
        }
      }
      if (!accessToken && !request.noAuthRequired) {
        const CancelToken = axios.CancelToken
        return {
          ...request,
          cancelToken: new CancelToken((cancel) => cancel('Cancelled unauthorized request'))
        }
      }

      if (request.method === 'get') {
        store.dispatch('common/setFetching')
      } else if (request.method === 'post') {
        store.dispatch('common/setLoading')
      } else if (request.method === 'put') {
        store.dispatch('common/setLoading')
      }
      return request
    }

    function handleRequestError (error) {
      store.dispatch('common/setLoading', false)
      store.dispatch('common/setFetching', false)
      return Promise.reject(error)
    }

    function handleResponseSuccess (response) {
      store.dispatch('common/setLoading', false)
      store.dispatch('common/setFetching', false)
      if (showNotification) {
        if (response.config.method === 'post') {
          store.dispatch('common/createNotify', notifyOptions || { message: 'Successfully Created' })
        } else if (response.config.method === 'put') {
          store.dispatch('common/createNotify', notifyOptions || { message: 'Successfully Updated', icon: 'update' })
        } else if (response.config.method === 'delete') {
          store.dispatch('common/createNotify', notifyOptions || { message: 'Successfully Deleted', icon: 'delete' })
        } else if (notifyOptions && response.config.method === 'get') {
          store.dispatch('common/createNotify', notifyOptions)
        }
      }
      return response
    }

    function handleResponseError (error) {
      store.dispatch('common/setLoading', false)
      store.dispatch('common/setFetching', false)

      if (isLocalErrorHandling || axios.isCancel(error)) return Promise.reject(error)

      const { message, unauthorized } = errorHandler(error)

      store.dispatch('common/renderAlertDialog', {
        message,
        configs: {
          persistent: unauthorized
        },
        confirm: {
          label: accessToken && unauthorized && 'log me out',
          handler: () => accessToken && unauthorized && store.dispatch('auth/logOutUser')
        }
      })

      return Promise.reject(error)
    }

    return axiosInstance
  }
})

function errorHandler (error) {
  let message = null
  let unauthorized = false

  if (error.response) {
    // Request made and server responded
    const errStatus = error.response.status
    errStatus === 401 && (unauthorized = true)
    const errFields = error.response.data.errorFields
    message = `
        <p class="text-weight-medium q-my-none text-grey-10">
          ${error.response.statusText} with status code ${errStatus}.
        </p>
        <span class="q-my-none">
          ${error.response.data.errorMessage}.
        </span>
      `
    if (errFields.length) {
      message += ` Wrong ${errFields[0]}`
      let i = 1
      while (i < errFields.length) {
        message += `, ${errFields[i]}`
        i++
      }
      message += '.'
    }
  } else if (error.message) {
    // Something happened in setting up the request that triggered an Error
    message = `${error.message}. Please check your internet connection or, the contents might be blocked by your Browser.`
  } else if (error.request) {
    // The request was made but no response was received
    message = 'The request was made but no response was received from server.'
  } else {
    message = 'Something went wrong.'
  }

  return { message, unauthorized }
}

export { client }
