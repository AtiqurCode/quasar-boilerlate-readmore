import { date } from 'quasar'
import { API_BASE_URL } from 'src/consts'

export const convertSnakeToCamel = snake => snake.replace(
  /([_][a-z])/g,
  (group) => group.toUpperCase().replace('_', '')
)

export const convertSnakeToKebab = snake => snake.replace(
  /([_][a-z])/g,
  (group) => group.replace('_', '-')
)

export const convertKebabToCamel = kebab => kebab.replace(
  /([-][a-z])/g,
  (group) => group.toUpperCase().replace('-', '')
)

export const convertCamelToSnake = camel => camel.replace(
  /([A-Z])/g,
  (group) => `_${group.toLowerCase()}`
)

export const convertCamelToKebab = camel => camel.replace(
  /([A-Z])/g,
  (group) => `-${group.toLowerCase()}`
)

export const convertObjCasing = (obj, conversionFunc) => {
  const convertedObj = {}
  Object.keys(obj).forEach(item => {
    convertedObj[conversionFunc(item)] = obj[item]
  })

  return convertedObj
}

export function backEndStorageURL (imageName, serviceName = 'default') {
  if (imageName) {
    return `${API_BASE_URL(serviceName)}/uploads/${imageName}`
  }
  return '/icons/icon.png'
}

export const changeDateFormat = (userDate, format = 'MMM DD, YYYY') => {
  return date.formatDate(userDate, format)
}

export const changeTimeFormat = (userDate, format = 'HH:mm a') => {
  return date.formatDate(userDate, format)
}

export const toCapitalize = (text) => {
  return text.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
}

export const decodeHTMLEntities = text => {
  const textArea = document.createElement('textarea')
  textArea.innerHTML = text
  return textArea.value
}

export const formatDBDate = (userDate) => {
  const date = new Date(userDate)

  function pad (number) {
    if (number < 10) {
      return '0' + number
    }
    return number
  }
  return date.getUTCFullYear() +
    '-' + pad(date.getUTCMonth() + 1) +
    '-' + pad(date.getUTCDate())
}

// export const isEmpty = (obj) => {
//   for (var prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       return false
//     }
//   }
//   return true
// }

export const formatAmount = (amount) => {
  return Number(amount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export const removeEmptyValue = (object) => {
  const newObj = Object.assign({}, object)
  return Object.keys(newObj).forEach(key => object[key] || delete object[key])
}

export const localTimeZone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

export const getTimeOfDayByZone = (date, timeZone = 'America/Toronto') => {
  return date.toLocaleString([], { hour: '2-digit', minute: '2-digit', timeZone }).toLowerCase()
}

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
