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

const urlRoot = process.env.RUNNING_SERVER
const request = ({ method, url, data }) => fetch(urlRoot + url, {
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

export const post = (url, data) => request({ method: 'POST', url, data })
export const get = (url) => request({ method: 'GET', url })
export const del = (url) => request({ method: 'DELETE', url })

// APIs about auth
export const login = (data) => post('/authc/signin', data)
export const register = (data) => post('/accounts', data)
export const logout = (id) => post('/authc/signout', id)

// APIs about user
export const loadBasicInfo = (id) => get(`/accounts/${id}/basicInfo`)
export const updateName = (id, data) => post(`/accounts/${id}/name`, data)
export const updatePassword = (id, data) => post(`/accounts/${id}/password`, data)
export const updateBasicInfo = (id, data) => post(`/accounts/${id}/basicInfo`, data)

// APIs about Email
export const loadEmails = (id) => get(`/accounts/${id}/emails`)
export const addEmail = (id, email) => post(`/accounts/${id}/emails`, email)
export const deleteEmail = ({ id, emailId }) => del(`/accounts/${id}/emails/${emailId}`)
export const updateEmail = ({ id, emailId }, data) => post(`/accounts/${id}/emails/${emailId}`, data)
export const sendEmail = ({ id, emailId }, data) => post(`/accounts/${id}/emails/${emailId}`, data)

// APIs about Mobile
export const loadMobiles = (id) => get(`/accounts/${id}/mobiles`)
export const addMobile = (id, mobile) => post(`/accounts/${id}/mobiles`, mobile)
export const deleteMobile = ({ id, mobileId }) => del(`/accounts/${id}/mobiles/${mobileId}`)
export const updateMobile = ({ id, mobileId }, data) => post(`/accounts/${id}/mobiles/${mobileId}`, data)
