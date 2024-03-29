import { combineReducers } from 'redux'
import * as userActions from './actions'

const user = (state = {}, action) => {
  switch (action.type) {
    case userActions.loadBasicInfoActions.SUCCESS:
      return action.payload
    case userActions.updateBasicInfoActions.SUCCESS:
      return action.payload
    case userActions.updateNameActions.SUCCESS:
      return action.payload
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

const emails = (state = [], action) => {
  switch (action.type) {
    case userActions.loadEmailsActions.SUCCESS:
      return action.payload
    case userActions.addEmailActions.SUCCESS:
      return action.payload
    case userActions.deleteEmailActions.SUCCESS:
      return action.payload.newEmails
    case userActions.updateEmailActions.SUCCESS:
      return action.payload.newEmails
    case userActions.sendEmailActions.SUCCESS:
      return action.payload.newEmails
    default:
      return state
  }
}

const mobiles = (state = [], action) => {
  switch (action.type) {
    case userActions.loadMobilesActions.SUCCESS:
      return action.payload
    case userActions.addMobileActions.SUCCESS:
      return action.payload
    case userActions.deleteMobileActions.SUCCESS:
      return action.payload.newMobiles
    case userActions.updateMobileActions.SUCCESS:
      return action.payload.newMobiles
    default:
      return state
  }
}

export default combineReducers({
  user,
  password,
  emails,
  mobiles,
})
