import { createActions } from '../utils/actions'

const prefix = 'PROJECT'

export const loadAllActions = createActions(prefix, 'LOAD_ALL')
export const loadCreatedActions = createActions(prefix, 'LOAD_CREATED')
export const loadJoinedActions = createActions(prefix, 'LOAD_JOINED')
export const loadWatchedActions = createActions(prefix, 'LOAD_WATCHED')
export const loadCollectActions = createActions(prefix, 'LOAD_COLLECT')
export const loadProfileActions = createActions(prefix, 'LOAD_PROFILE')
export const addProjectActions = createActions(prefix, 'ADD_PROJECT')
