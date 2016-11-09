import { combineReducers } from 'redux'

import { loadUserActions } from './actions'

const user = (state = {}, action) => {
  switch (action.type) {
    case loadUserActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  user,
})
