import { createActions } from '../utils/actions'

const prefix = 'PROJECT'

export const loadAllActions = createActions(prefix, 'LOAD_ALL')
export const addProjectActions = createActions(prefix, 'ADD_PROJECT')
