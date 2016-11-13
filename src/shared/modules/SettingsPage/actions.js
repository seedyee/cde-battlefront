import { createActions } from '../utils/actions'

const prefix = 'SETTINGS/USER'
export const loadUserActions = createActions(prefix, 'LOAD_USER')
export const updateMobileActions = createActions(prefix, 'ADD_MOBILE')
export const addEmailActions = createActions(prefix, 'ADD_EMIAL')
export const updateUserActions = createActions(prefix, 'UPDATE_USER')
export const updatePasswordActions = createActions(prefix, 'UPDATE_PASSWORD')
