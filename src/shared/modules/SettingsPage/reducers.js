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

const emails = (state = {}, action) => {
  switch (action.type) {
    case userActions.loadEmailsActions.SUCCESS:
      return action.payload
    case userActions.deleteEmailActions.SUCCESS:
      return action.payload.newEmails
    default:
      return state
  }
}

const mobiles = (state = {}, action) => {
  switch (action.type) {
    case userActions.loadMobilesActions.SUCCESS:
      return action.payload
    case userActions.deleteMobileActions.SUCCESS:
      return action.payload.newMobiles
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

export default combineReducers({
  user,
  emails,
  mobiles,
  password,
})
