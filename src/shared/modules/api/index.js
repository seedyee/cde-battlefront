import fetch from 'isomorphic-fetch'

/**
 * The Promise returned from fetch() won't reject on HTTP error status
 * even if the response is a HTTP 404 or 500.
 *
 * By default, fetch won't send any cookies to the server,
 * resulting in unauthenticated requests if the site relies on maintaining a user session.
 */

// To have fetch Promise reject on HTTP error statuses, i.e. on any non-2xx status
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const parseJSON = (response) => {
  const contentType = response.headers.get('Content-Type')
  if ((/^text\/plain/i).test(contentType)) {
    return response.text()
  } else if ((/^application\/json/i).test(contentType)) {
    return response.json()
  }
  throw new Error('Accept text/plain and application/json but not other types !')
}

const urlRoot = `${process.env.APP_HOST}:${process.env.SERVER_PORT}`
const devApiPrefix = '/dev/api'
const apiUrl = `${process.env.PROXY_SERVER_ROOT}:${process.env.PROXY_SERVER_PORT}`

const createRequest = (rootUrl = '', prefix = '') => ({ method, url, data }) => fetch(rootUrl + prefix + url, {
  // Use the include value to send cookies in a
  // cross-origin resource sharing (CORS) request
  // credentials: 'include',

  // Automatically send cookies for the current domain
  method,
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json,text/plain',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(checkStatus).then(parseJSON)

const realRequest = createRequest(apiUrl)
export const realPost = (url, data) => realRequest({ method: 'POST', url, data })
export const realGet = (url) => realRequest({ method: 'GET', url })
export const realRel = (url) => realRequest({ method: 'DELETE', url })

const request = createRequest(urlRoot, devApiPrefix)
export const post = (url, data) => request({ method: 'POST', url, data })
export const get = (url) => request({ method: 'GET', url })
export const del = (url) => request({ method: 'DELETE', url })



export const login = (data) => realPost('/authc/signin', data)
export const register = (data) => realPost('/accounts', data)
export const logout = (id) => post('/authc/signout', id)

// APIs about user
export const loadBasicInfo = (id) => realGet(`/accounts/${id}/basicInfo`)
export const updateBasicInfo = (id, data) => realPost(`/accounts/${id}/basicInfo`, data)
export const updatePassword = (id, data) => realPost(`/accounts/${id}/password`, data)
export const updateName = (id, data) => realPost(`/accounts/${id}/name`, data)

// APIs about Email
export const loadEmails = (id) => realGet(`/accounts/${id}/emails`)
export const addEmail = (id, email) => realPost(`/accounts/${id}/emails`, email)
export const deleteEmail = ({ id, emailId }) => realRel(`/accounts/${id}/emails/${emailId}`)
export const updateEmail = ({ id, emailId }, data) => realPost(`/accounts/${id}/emails/${emailId}`, data)
export const sendEmail = ({ id, emailId }, data) => post(`/accounts/${id}/emails/${emailId}`, data)

// APIs about Mobile
export const loadMobiles = (id) => realGet(`/accounts/${id}/mobiles`)
export const addMobile = (id, mobile) => realPost(`/accounts/${id}/mobiles`, mobile)
export const deleteMobile = ({ id, mobileId }) => realRel(`/accounts/${id}/mobiles/${mobileId}`)
export const updateMobile = (id, data) => post(`/accounts/${id}/basicInfo`, data)
export const sendMobile = ({ id, mobileId }, data) => post(`/accounts/${id}/mobiles/${mobileId}`, data)
