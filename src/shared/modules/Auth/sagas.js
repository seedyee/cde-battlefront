import { fork, take, call, put } from 'redux-saga/effects'
import { loginActions, logoutActions, registerActions } from './actions'
import * as api from '../api'

export function* loginFlow() {
  while (true) {
    const { payload } = yield take(loginActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.login, payload)
      if (error) {
        yield put(loginActions.failure(error.text))
        alert(error.text)
      } else {
        yield put(loginActions.success(rest))
        alert('登录成功 !')
      }
    } catch (e) {
      yield put(loginActions.failure(e))
      alert(e)
    }
  }
}

export function* logoutFlow() {
  while (true) {
    const { payload } = yield take(logoutActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.logout, payload)
      if (error) {
        yield put(logoutActions.failure(error.text))
      } else {
        yield put(logoutActions.success(rest))
      }
    } catch (e) {
      yield put(logoutActions.failure(e))
      alert(e)
    }
  }
}

export function* registerFlow() {
  while (true) {
    const { payload } = yield take(registerActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.register, payload)
      if (error) {
        yield put(registerActions.failure(error.text))
        alert(error.text)
      } else {
        yield put(registerActions.success(rest))
        alert('注册成功 !')
      }
    } catch (e) {
      yield put(registerActions.failure(e))
      alert(e)
    }
  }
}

export default function* () {
  yield [
    fork(loginFlow),
    fork(logoutFlow),
    fork(registerFlow),
  ]
}

