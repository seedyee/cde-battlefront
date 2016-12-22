import { combineReducers } from 'redux'
import * as projectActions from './actions'

const projects = (state = {}, action) => {
  switch (action.type) {
    case projectActions.addProjectActions.SUCCESS:
      return action.payload
    case projectActions.loadProjectsActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  projects,
})
