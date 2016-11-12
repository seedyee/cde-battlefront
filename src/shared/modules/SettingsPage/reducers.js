import { combineReducers } from 'redux'

import * as userActions from './actions'

const user = (state = {}, action) => {
  switch (action.type) {
    case userActions.loadUserActions.SUCCESS:
      return action.payload
    case userActions.updateUserActions.SUCCESS:
      return { username: action.payload }
    default:
      return state
  }
}


export default combineReducers({
  user,
})
