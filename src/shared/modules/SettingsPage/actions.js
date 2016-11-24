import { createActions } from '../utils/actions'

const prefix = 'SETTINGS/USER'

export const loadUserActions = createActions(prefix, 'LOAD_USER')
export const loadEmailsActions = createActions(prefix, 'LOAD_EMAILS')
export const loadMobilesActions = createActions(prefix, 'LOAD_MOBILES')

export const updateUserActions = createActions(prefix, 'UPDATE_USER')
export const updatePasswordActions = createActions(prefix, 'UPDATE_PASSWORD')
export const updateEmailActions = createActions(prefix, 'UPDATE_EMAIL')
export const updateMobileActions = createActions(prefix, 'UPDATE_MOBILE')

export const addEmailActions = createActions(prefix, 'ADD_EMAIL')
export const addMobileActions = createActions(prefix, 'ADD_MOBILE')

export const deleteEmailActions = createActions(prefix, 'DELETE_EMAIL')
export const deleteMobileActions = createActions(prefix, 'DELETE_MOBILE')
