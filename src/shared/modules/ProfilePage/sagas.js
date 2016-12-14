import { call, put, fork, select } from 'redux-saga/effects'
import { loadUserActions } from './actions'
import { selectCurrentUser } from './selectors'
import { isEmptyObj } from '../utils'
import * as api from '../api'

const ID = '585118ef30e7b3537e82a30d'

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
