import { call, put, fork, select } from 'redux-saga/effects'
import { loadUserActions } from './actions'
import { selectCurrentUser } from './selectors'
import { isEmptyObj } from '../utils'
import * as api from '../api'

const ID = '5850ab4b30e7b3255c2a78ad'

function* loadBasicInfo() {
  const user = yield select(selectCurrentUser)
  if (!isEmptyObj(user)) return
  yield put(loadUserActions.request())
  try {
    const response = yield call(api.loadBasicInfo, ID)
    yield put(loadUserActions.success(response))
  } catch (e) {
    yield put(loadUserActions.failure(e))
  }
}

export default function* profileSaga() {
  yield [
    fork(loadBasicInfo),
  ]
}
