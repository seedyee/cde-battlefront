import { call, put, fork } from 'redux-saga/effects'
import * as api from '../api'
import { loadUserActions } from './actions'

function* loadUser() {
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
