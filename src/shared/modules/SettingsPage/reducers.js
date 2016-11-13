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

const password = (state = {}, action) => {
  switch (action.type) {
    case userActions.updatePasswordActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}

const email = (state = {}, action) => {
  switch (action.type) {
    case userActions.addEmailActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}

const mobile = (state = {}, action) => {
  switch (action.type) {
    case userActions.updateMobileActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  user,
  password,
  email,
  mobile,
})
