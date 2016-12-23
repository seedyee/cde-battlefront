import { combineReducers } from 'redux'
import * as projectActions from './actions'

const all = (state = [], action) => {
  switch (action.type) {
    case projectActions.addProjectActions.SUCCESS:
      return action.payload
    case projectActions.loadAllActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}


export default combineReducers({
  all,
})
