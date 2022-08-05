export const API_BASE_URL = serviceName => `${import.meta.env.ITC_API_BASE_PROTOCOL || 'http'}://${import.meta.env.ITC_API_BASE_DOMAIN || 'localhost'}`

export const API_URL = serviceName => `${API_BASE_URL(serviceName)}/api/v1/`

export const APP_ID = import.meta.env.ITC_APP_ID
export const STORAGE_KEY = import.meta.env.ITC_STORAGE_KEY
export const APP_NAME = import.meta.env.ITC_APP_NAME
export const DEFAULT_PAGE_TITLE = import.meta.env.ITC_DEFAULT_PAGE_TITLE

export const COMPANY_TYPE = {
  SOLE_PROPRIETORSHIP: 'Sole Proprietorship',
  PARTNERSHIP: 'Partnership',
  LLC: 'LLC',
  PERSONAL: 'Personal',
  INCORPORATION: 'Incorporation'
}
