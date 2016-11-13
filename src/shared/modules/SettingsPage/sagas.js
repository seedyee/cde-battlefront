import { take, put, call, fork, select } from 'redux-saga/effects'

import * as api from '../api'
import { selectUser } from './selectors'
import { loadUserActions, updateUserActions, updatePasswordActions, addEmailActions, updateMobileActions } from './actions'
import { isEmptyObj } from '../utils'

// We are using SSR(server-side-rendering), if everything goes well we should have users in our
// initialState thus we don't need to request users on client side again.
// actually, in client side this saga does nothing and it would return directly.

function* loadUser() {
  const user = yield select(selectUser)
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

function* updateUser() {
  while (true) {
    const { payload } = yield take(updateUserActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.updateUser, payload)
      if (error) {
        yield put(updateUserActions.failure(error.text))
        alert(error.text)
      } else {
        yield put(updateUserActions.success(rest))
        alert('更改用户名成功 !')
      }
    } catch (e) {
      yield put(updateUserActions.failure(e))
      alert(e)
    }
  }
}

function* updatePassword() {
  while (true) {
    const { payload } = yield take(updatePasswordActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.updatePassword, payload)
      if (error) {
        yield put(updatePasswordActions.failure(error.text))
        alert(error.text)
      } else {
        yield put(updatePasswordActions.success(rest))
        alert('更新密码成功 ！')
      }
    } catch (e) {
      yield put(updatePasswordActions.failure(e))
      alert(e)
    }
  }
}

function* addEmail() {
  while (true) {
    const { payload } = yield take(addEmailActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.addEmail, payload)
      if (error) {
        yield put(addEmailActions.failure(error.text))
        alert(error.text)
      } else {
        yield put(addEmailActions.success(rest))
        alert('新增邮箱成功 !')
      }
    } catch (e) {
      yield put(addEmailActions.failure(e))
      alert(e)
    }
  }
}

function* addMobile() {
  while (true) {
    const { payload } = yield take(updateMobileActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.addMobile, payload)
      if (error) {
        yield put(updateMobileActions.failure(error.text))
        alert(error.text)
      } else {
        yield put(updateMobileActions.success(rest))
        alert('手机添加成功 !')
      }
    } catch (e) {
      yield put(updateMobileActions.failure(e))
      alert(e)
    }
  }
}


export default function* settingsSaga() {
  yield [
    fork(loadUser),
    fork(updateUser),
    fork(updatePassword),
    fork(addEmail),
    fork(addMobile),
  ]
}
