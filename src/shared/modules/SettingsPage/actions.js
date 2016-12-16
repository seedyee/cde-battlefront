import { createActions } from '../utils/actions'

const prefix = 'SETTINGS/USER'

// Actions about user
export const loadBasicInfoActions = createActions(prefix, 'LOAD_BASIC_INFO')
export const updateBasicInfoActions = createActions(prefix, 'UPDATE_BASIC_INFO')
export const updateNameActions = createActions(prefix, 'UPDATE_NAME')
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
