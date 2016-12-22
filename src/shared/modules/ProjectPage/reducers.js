import { combineReducers } from 'redux'
import * as projectActions from './actions'

const project = (state = {}, action) => {
  switch (action.type) {
    case projectActions.addProjectActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  project,
})
