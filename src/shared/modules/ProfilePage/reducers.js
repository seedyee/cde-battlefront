import { combineReducers } from 'redux'

import { loadBasicInfoActions } from './actions'

const user = (state = {}, action) => {
  switch (action.type) {
    case loadBasicInfoActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  user,
})
