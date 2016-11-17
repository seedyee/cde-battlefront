import { take, put, call, fork, select } from 'redux-saga/effects'

import * as api from '../api'
import { selectUser, selectEmails, selectMobiles } from './selectors'
import * as actions from './actions'
import { isEmptyObj } from '../utils'

// We are using SSR(server-side-rendering), if everything goes well we should have users in our
// initialState thus we don't need to request users on client side again.
// actually, in client side this saga does nothing and it would return directly.

function* loadUser() {
  const user = yield select(selectUser)
  // If user is not empty
  if (!isEmptyObj(user)) return
  yield put(actions.loadUserActions.request())
  try {
    const response = yield call(api.loadUser, 'fakeId')
    yield put(actions.loadUserActions.success(response))
  } catch (e) {
    yield put(actions.loadUserActions.failure(e))
  }
}

function* loadEmails() {
  const user = yield select(selectUser)
  // If user is not empty
  if (!isEmptyObj(user)) return
  yield put(actions.loadEmailsActions.request())
  try {
    const response = yield call(api.loadEmails, 'fakeId')
    yield put(actions.loadEmailsActions.success(response))
  } catch (e) {
    yield put(actions.loadEmailsActions.failure(e))
  }
}

function* loadMobiles() {
  const user = yield select(selectUser)
  // If user is not empty
  if (!isEmptyObj(user)) return
  yield put(actions.loadMobilesActions.request())
  try {
    const response = yield call(api.loadMobiles, 'fakeId')
    yield put(actions.loadMobilesActions.success(response))
  } catch (e) {
    yield put(actions.loadMobilesActions.failure(e))
  }
}

function* updateUser() {
  while (true) {
    const { payload } = yield take(actions.updateUserActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.updateUser, payload)
      if (error) {
        yield put(actions.updateUserActions.failure(error.text))
        alert(error.text)
      } else {
        yield put(actions.updateUserActions.success(rest))
        alert('更改用户名成功 !')
      }
    } catch (e) {
      yield put(actions.updateUserActions.failure(e))
      alert(e)
    }
  }
}

function* updatePassword() {
  while (true) {
    const { payload } = yield take(actions.updatePasswordActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.updatePassword, payload)
      if (error) {
        yield put(actions.updatePasswordActions.failure(error.text))
        alert(error.text)
      } else {
        yield put(actions.updatePasswordActions.success(rest))
        alert('更新密码成功 ！')
      }
    } catch (e) {
      yield put(actions.updatePasswordActions.failure(e))
      alert(e)
    }
  }
}

function* addEmail() {
  while (true) {
    const { payload } = yield take(actions.addEmailActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.addEmail, payload)
      if (error) {
        yield put(actions.addEmailActions.failure(error.text))
        alert(error.text)
      } else {
        yield put(actions.addEmailActions.success(rest))
        alert('新增邮箱成功 !')
      }
    } catch (e) {
      yield put(actions.addEmailActions.failure(e))
      alert(e)
    }
  }
}

function* addMobile() {
  while (true) {
    const { payload } = yield take(actions.addMobileActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.addMobile, payload)
      if (error) {
        yield put(actions.addMobileActions.failure(error.text))
        alert(error.text)
      } else {
        yield put(actions.addMobileActions.success(rest))
        alert('手机添加成功 !')
      }
    } catch (e) {
      yield put(actions.addMobileActions.failure(e))
      alert(e)
    }
  }
}

function* deleteEmail() {
  while (true) {
    const { payload } = yield take(actions.deleteEmailActions.REQUEST)
    const emails = yield select(selectEmails)
    try {
      const { error } = yield call(api.addMobile, payload)
      if (error) {
        yield put(actions.deleteEmailActions.failure(error.text))
        alert(error.text)
      } else {
        const newEmails = emails.filter(e => e.id !== payload)
        yield put(actions.deleteEmailActions.success({ newEmails }))
        alert('邮箱删除成功 !')
      }
    } catch (e) {
      yield put(actions.deleteEmailActions.failure(e))
      alert(e)
    }
  }
}

function* deleteMobile() {
  while (true) {
    const { payload } = yield take(actions.deleteMobileActions.REQUEST)
    const mobiles = yield select(selectMobiles)
    try {
      const { error } = yield call(api.addMobile, payload)
      if (error) {
        yield put(actions.deleteMobileActions.failure(error.text))
        alert(error.text)
      } else {
        const newMobiles = mobiles.filter(e => e.id !== payload)
        yield put(actions.deleteMobileActions.success({ newMobiles }))
        alert('手机删除成功 !')
      }
    } catch (e) {
      yield put(actions.deleteMobileActions.failure(e))
      alert(e)
    }
  }
}

export default function* settingsSaga() {
  yield [
    fork(loadUser),
    fork(loadEmails),
    fork(loadMobiles),
    fork(updateUser),
    fork(updatePassword),
    fork(addEmail),
    fork(addMobile),
    fork(deleteEmail),
    fork(deleteMobile),
  ]
}
