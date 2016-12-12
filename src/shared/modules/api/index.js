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

const createRequest = (prefix) => ({ method, url, data }) => fetch(urlRoot + prefix + url, {
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

const request = createRequest(devApiPrefix)

export const post = (url, data) => request({ method: 'POST', url, data })
export const get = (url) => request({ method: 'GET', url })
export const del = (url) => request({ method: 'DELETE', url })

export const login = (data) => post('/login', data)
export const register = (data) => post('/register', data)
export const logout = (id) => get(`/logout?id=${id}`)

// APIs about user
export const loadUsers = () => get('/users')
export const loadUser = (id) => get(`/accounts/${id}/basicInfo`)
export const updateUser = (id, data) => post(`/accounts/${id}/basicInfo`, data)
export const updatePassword = (id, data) => post(`/accounts/${id}/password`, data)

// APIs about Email
export const loadEmails = (id) => get(`/accounts/${id}/emails`)
export const addEmail = (id, email) => post(`/accounts/${id}/emails`, email)
export const deleteEmail = ({ id, emailId }) => del(`/accounts/${id}/emails/${emailId}`)
export const updateEmail = (id, data) => post(`/accounts/${id}/basicInfo`, data)
export const sendEmail = ({ id, emailId }, data) => post(`/accounts/${id}/emails/${emailId}`, data)

// APIs about Mobile
export const loadMobiles = (id) => get(`/accounts/${id}/mobiles`)
export const addMobile = (id, mobile) => post(`/accounts/${id}/mobiles`, mobile)
export const deleteMobile = ({ id, mobileId }) => del(`/accounts/${id}/mobiles/${mobileId}`)
export const updateMobile = (id, data) => post(`/accounts/${id}/basicInfo`, data)
export const sendMobile = ({ id, mobileId }, data) => post(`/accounts/${id}/mobiles/${mobileId}`, data)
