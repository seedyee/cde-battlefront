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

const created = (state = [], action) => {
  switch (action.type) {
    case projectActions.loadCreatedActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}

const joined = (state = [], action) => {
  switch (action.type) {
    case projectActions.loadJoinedActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}

const watched = (state = [], action) => {
  switch (action.type) {
    case projectActions.loadWatchedActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}

const collect = (state = [], action) => {
  switch (action.type) {
    case projectActions.loadCollectActions.SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  all,
  created,
  joined,
  watched,
  collect,
})
