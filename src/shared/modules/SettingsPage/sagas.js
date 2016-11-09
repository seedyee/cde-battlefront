import { put, call, fork, select } from 'redux-saga/effects'

import * as api from '../api'
import { selectUser } from './selectors'
import { loadUserActions } from './actions'
import { isEmptyObj } from '../utils'

// We are using SSR(server-side-rendering), if everything goes well we should have users in our
// initialState thus we don't need to request users on client side again.
// actually, in client side this saga does nothing and it would return directly.

function* loadUser() {
  const user = yield select(selectUser)
  // Is user is not empty
  if (!isEmptyObj(user)) return
  yield put(loadUserActions.request())
  try {
    const response = yield call(api.loadUser, 'fakeId')
    yield put(loadUserActions.success(response))
  } catch (e) {
    yield put(loadUserActions.failure(e))
  }
}

export default function* settingsSaga() {
  yield [
    fork(loadUser),
  ]
}
