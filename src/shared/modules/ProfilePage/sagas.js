import { call, put, fork, select } from 'redux-saga/effects'
import * as api from '../api'
import { loadUserActions } from './actions'
import { selectCurrentUser } from './selectors'
import { isEmptyObj } from '../utils'

function* loadUser() {
  const user = yield select(selectCurrentUser)
  // If user is not empty
  if (!isEmptyObj(user)) return
  yield put(loadUserActions.request())
  try {
    const response = yield call(api.loadUser, 'fakeId')
    yield put(loadUserActions.success(response))
  } catch (e) {
    yield put(loadUserActions.failure(e))
  }
}

export default function* profileSaga() {
  yield [
    fork(loadUser),
  ]
}
