import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'

import { loadUserActions } from './actions'

const user = (state = fromJS({}), action) => {
  switch (action.type) {
    case loadUserActions.SUCCESS:
      return fromJS(action.payload)
    default:
      return state
  }
}

export default combineReducers({
  user,
})
