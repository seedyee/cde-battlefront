import { createActions } from '../utils/actions'

const prefix = 'PROJECT'

export const loadProjectsActions = createActions(prefix, 'LOAD_PROJECTS')
export const addProjectActions = createActions(prefix, 'ADD_PROJECT')
