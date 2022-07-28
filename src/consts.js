export const API_BASE_URL = serviceName => `${process.env.services[serviceName].API_BASE_PROTOCOL || 'http'}://${process.env.services[serviceName].API_BASE_DOMAIN || 'localhost'}`

export const API_URL = serviceName => `${API_BASE_URL(serviceName)}/api/v1/`

export const APP_ID = 'main'
export const STORAGE_KEY = 'QUASAR_BOILERPLATE_v2'
export const APP_NAME = 'quasar-boilerplate-v2'
export const DEFAULT_PAGE_TITLE = 'Quasar Boilerplate v2.0'

export const COMPANY_TYPE = {
  SOLE_PROPRIETORSHIP: 'Sole Proprietorship',
  PARTNERSHIP: 'Partnership',
  LLC: 'LLC',
  PERSONAL: 'Personal',
  INCORPORATION: 'Incorporation'
}
