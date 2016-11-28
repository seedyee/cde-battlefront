import { createActions } from '../utils/actions'

const prefix = 'SETTINGS/USER'

// Actions about user
export const loadUserActions = createActions(prefix, 'LOAD_USER')
export const updateUserActions = createActions(prefix, 'UPDATE_USER')

// Actions about password
export const updatePasswordActions = createActions(prefix, 'UPDATE_PASSWORD')

// Actions about email
export const loadEmailsActions = createActions(prefix, 'LOAD_EMAILS')
export const addEmailActions = createActions(prefix, 'ADD_EMAIL')
export const deleteEmailActions = createActions(prefix, 'DELETE_EMAIL')
export const updateEmailActions = createActions(prefix, 'UPDATE_EMAIL')
export const sendEmailActions = createActions(prefix, 'SEND_EMAIL')

// Actions about mobile
export const loadMobilesActions = createActions(prefix, 'LOAD_MOBILES')
export const addMobileActions = createActions(prefix, 'ADD_MOBILE')
export const deleteMobileActions = createActions(prefix, 'DELETE_MOBILE')
export const updateMobileActions = createActions(prefix, 'UPDATE_MOBILE')
export const sendMobileActions = createActions(prefix, 'SEND_MOBILE')
