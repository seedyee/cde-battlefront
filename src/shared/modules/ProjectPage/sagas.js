import { take, put, call, fork, select } from 'redux-saga/effects'
import * as actions from './actions'
import * as api from '../api'

function* addProject() {
  while (true) {
    const { payload } = yield take(actions.addProjectActions.REQUEST)
    try {
      const response = yield call(api.addProject, payload)
      if (response.code === 0) {
        yield put(actions.addProjectActions.success())
        alert('创建项目成功 !')
      } else {
        yield put(actions.addProjectActions.failure(response.message))
        alert(response.message)
      }
    } catch (e) {
      yield put(actions.addProjectActions.failure(e))
      alert(e)
    }
  }
}

export default function* projectSaga() {
  yield [
    fork(addProject),
  ]
}
