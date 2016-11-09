import { loginActions, logoutActions, registerActions } from './actions'

const initialAuthState = { logined: false, user: {} }
const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case loginActions.SUCCESS:
      return { user: action.payload, logined: true }
    case logoutActions.SUCCESS:
      return initialAuthState
    case registerActions.SUCCESS:
      return { user: action.payload, logined: true }
    default:
      return state
  }
}

export default auth

