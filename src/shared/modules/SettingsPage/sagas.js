import { take, put, call, fork, select } from 'redux-saga/effects'
import { selectUser, selectEmails, selectMobiles } from './selectors'
import * as actions from './actions'
import * as api from '../api'
import { isEmptyObj } from '../utils'
import last from 'lodash/last'

function* loadUser() {
  const user = yield select(selectUser)
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
      const { error } = yield call(api.updateUser, 'fakeId', payload)
      if (error) {
        yield put(actions.updateUserActions.failure(error.text))
        alert(error.text)
      } else {
        const user = yield call(api.loadUser, 'fakeId')
        yield put(actions.updateUserActions.success(user))
        alert('更新成功 !')
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
    if (payload.password === payload.newPassword) {
      yield put(actions.updatePasswordActions.failure())
      alert('新密码跟原密码一致 !')
    } else {
      try {
        const { error, ...rest } = yield call(api.updatePassword, 'fakeId', { password: payload.password, newPassword: payload.newPassword })
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
}

function* addEmail() {
  while (true) {
    const { payload } = yield take(actions.addEmailActions.REQUEST)
    const emails = yield select(selectEmails)
    if (emails.some(e => e.email === payload.email)) {
      yield put(actions.addEmailActions.failure())
      alert('不能添加相同邮箱 !')
    } else {
      try {
        const { error } = yield call(api.addEmail, 'fakeId', { email: payload.email })
        if (error) {
          yield put(actions.addEmailActions.failure(error.text))
          alert(error.text)
        } else {
          const newEmails = [...emails]
          newEmails.push({
            id: emails.length === 0 ? '1' : String(Number(last(emails).id) + 1),
            email: payload.email,
            isDefault: false,
            isVerified: false,
            isPublic: false,
          })
          yield put(actions.addEmailActions.success({ newEmails }))
          alert('新增邮箱成功 !')
        }
      } catch (e) {
        yield put(actions.addEmailActions.failure(e))
        alert(e)
      }
    }
  }
}

function* addMobile() {
  while (true) {
    const { payload } = yield take(actions.addMobileActions.REQUEST)
    const mobiles = yield select(selectMobiles)
    if (mobiles.some(m => m.mobile === payload.mobile)) {
      yield put(actions.addMobileActions.failure())
      alert('不能添加相同手机 !')
    } else {
      try {
        const { error } = yield call(api.addMobile, 'fakeId', { mobile: payload.mobile })
        if (error) {
          yield put(actions.addMobileActions.failure(error.text))
          alert(error.text)
        } else {
          const newMobiles = [...mobiles]
          newMobiles.push({
            id: mobiles.length === 0 ? '1' : String(Number(last(mobiles).id) + 1),
            mobile: payload.mobile,
            isDefault: false,
            isVerified: false,
            isPublic: false,
          })
          yield put(actions.addMobileActions.success({ newMobiles }))
          alert('手机添加成功 !')
        }
      } catch (e) {
        yield put(actions.addMobileActions.failure(e))
        alert(e)
      }
    }
  }
}

function* deleteEmail() {
  while (true) {
    const { payload } = yield take(actions.deleteEmailActions.REQUEST)
    const emails = yield select(selectEmails)
    try {
      const { error } = yield call(api.deleteEmail, { id: 'fakeId', emailId: payload })
      if (error) {
        yield put(actions.deleteEmailActions.failure(error.text))
        alert(error.text)
      } else {
        const newEmails = emails.filter(e => e.id !== payload)
        yield put(actions.deleteEmailActions.success({ newEmails }))
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
      const { error } = yield call(api.deleteMobile, { id: 'fakeId', mobileId: payload })
      if (error) {
        yield put(actions.deleteMobileActions.failure(error.text))
        alert(error.text)
      } else {
        const newMobiles = mobiles.filter(e => e.id !== payload)
        yield put(actions.deleteMobileActions.success({ newMobiles }))
      }
    } catch (e) {
      yield put(actions.deleteMobileActions.failure(e))
      alert(e)
    }
  }
}

function* updateEmail() {
  while (true) {
    const { payload } = yield take(actions.updateEmailActions.REQUEST)
    console.log(payload)
    const emails = yield select(selectEmails)
    try {
      const { error } = yield call(api.updateEmail, { id: 'fakeId', emailId: payload.id }, { isVerified: payload.isVerified })
      if (error) {
        yield put(actions.updateEmailActions.failure(error.text))
        alert(error.text)
      } else {
        const newEmails = [...emails]
        yield put(actions.updateEmailActions.success({ newEmails }))
        alert('认证邮箱已发送，请登录该邮箱进行认证 !')
      }
    } catch (e) {
      yield put(actions.updateEmailActions.failure(e))
      alert(e)
    }
  }
}

function* updateMobile() {
  while (true) {
    const { payload } = yield take(actions.updateMobileActions.REQUEST)
    const mobiles = yield select(selectMobiles)
    try {
      const { error } = yield call(api.updateMobile, { id: 'fakeId', mobileId: payload.id }, { isVerified: payload.isVerified })
      if (error) {
        yield put(actions.updateMobileActions.failure(error.text))
        alert(error.text)
      } else {
        const newMobiles = [...mobiles]
        yield put(actions.updateMobileActions.success({ newMobiles }))
        alert('已发送手机认证短信 !')
      }
    } catch (e) {
      yield put(actions.updateMobileActions.failure(e))
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
    fork(updateEmail),
    fork(updateMobile),
  ]
}
