import { call, put, fork, select } from 'redux-saga/effects'
import { loadBasicInfoActions } from './actions'
import { selectCurrentUser } from './selectors'
import { isEmptyObj } from '../utils'
import * as api from '../api'

const ID = '585118ef30e7b3537e82a30d'

function* loadBasicInfo() {
  const user = yield select(selectCurrentUser)
  if (!isEmptyObj(user)) return
  yield put(loadBasicInfoActions.request())
  try {
    const response = yield call(api.loadBasicInfo, ID)
    yield put(loadBasicInfoActions.success(response))
  } catch (e) {
    yield put(loadBasicInfoActions.failure(e))
  }
}

export default function* profileSaga() {
  yield [
    fork(loadBasicInfo),
  ]
}
