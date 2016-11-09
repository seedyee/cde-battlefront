import { createActions } from '../utils/actions'

const prefix = 'SETTINGS/USER'
export const loadUserActions = createActions(prefix, 'LOAD_USER')
export const updateMobile = createActions(prefix, 'ADD_MOBILE')
export const addEmail = createActions(prefix, 'ADD_EMIAL')
export const updateUserActions = createActions(prefix, 'UPDATE_USER')
