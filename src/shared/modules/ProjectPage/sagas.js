import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import * as api from '../api'

function* loadAll() {
  yield put(actions.loadAllActions.request())
  try {
    const projects = yield call(api.loadAll)
    yield put(actions.loadAllActions.success(projects))
  } catch (e) {
    yield put(actions.loadAllActions.failure(e))
  }
}

function* loadCreated() {
  yield put(actions.loadCreatedActions.request())
  try {
    const projects = yield call(api.loadCreated)
    yield put(actions.loadCreatedActions.success(projects))
  } catch (e) {
    yield put(actions.loadCreatedActions.failure(e))
  }
}

function* loadJoined() {
  yield put(actions.loadJoinedActions.request())
  try {
    const projects = yield call(api.loadJoined)
    yield put(actions.loadJoinedActions.success(projects))
  } catch (e) {
    yield put(actions.loadJoinedActions.failure(e))
  }
}

function* loadWatched() {
  yield put(actions.loadWatchedActions.request())
  try {
    const projects = yield call(api.loadWatched)
    yield put(actions.loadWatchedActions.success(projects))
  } catch (e) {
    yield put(actions.loadWatchedActions.failure(e))
  }
}

function* loadCollect() {
  yield put(actions.loadCollectActions.request())
  try {
    const projects = yield call(api.loadCollect)
    yield put(actions.loadCollectActions.success(projects))
  } catch (e) {
    yield put(actions.loadCollectActions.failure(e))
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

function* loadProfile() {
  while (true) {
    const { payload } = yield take(actions.loadProfileActions.REQUEST)
    try {
      const response = yield call(api.loadProfile, payload)
      yield put(actions.loadProfileActions.success(response))
    } catch (e) {
      yield put(actions.loadProfileActions.failure(e))
      alert(e)
    }
  }
}

export default function* projectSaga() {
  yield [
    fork(loadAll),
    fork(loadCreated),
    fork(loadJoined),
    fork(loadWatched),
    fork(loadCollect),
    fork(loadProfile),
    fork(addProject),
  ]
}
