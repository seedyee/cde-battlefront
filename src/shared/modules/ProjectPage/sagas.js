import { take, put, call, fork, select } from 'redux-saga/effects'
import * as actions from './actions'
import * as api from '../api'

function* loadProjects() {
  yield put(actions.loadProjectsActions.request())
  try {
    const projects = yield call(api.loadProjects)
    yield put(actions.loadProjectsActions.success(projects))
  } catch (e) {
    yield put(actions.loadProjectsActions.failure(e))
  }
}

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
    fork(loadProjects),
    fork(addProject),
  ]
}
