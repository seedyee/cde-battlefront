import { take, put, call, fork, select } from 'redux-saga/effects'
import { selectUser, selectEmails, selectMobiles } from './selectors'
import * as actions from './actions'
import * as api from '../api'
import { isEmptyObj } from '../utils'

const ID = '585118ef30e7b3537e82a30d'
/*
 * sagas about user
 */
function* loadBasicInfo() {
  const user = yield select(selectUser)
  if (!isEmptyObj(user)) return
  yield put(actions.loadUserActions.request())
  try {
    const response = yield call(api.loadBasicInfo, ID)
    yield put(actions.loadUserActions.success(response))
  } catch (e) {
    yield put(actions.loadUserActions.failure(e))
  }
}

function* updateBasicInfo() {
  while (true) {
    const { payload } = yield take(actions.updateUserActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.updateBasicInfo, ID, payload)
      if (error) {
        yield put(actions.updateUserActions.failure(error.text))
        alert(error.text)
      } else if (rest.code === 0) {
        const user = yield call(api.loadBasicInfo, ID)
        yield put(actions.updateUserActions.success(user))
        alert('更新成功 !')
      } else {
        yield put(actions.updateUserActions.failure(rest.message))
        alert(rest.message)
      }
    } catch (e) {
      yield put(actions.updateUserActions.failure(e))
      alert(e)
    }
  }
}

function* updateName() {
  while (true) {
    const { payload } = yield take(actions.updateNameActions.REQUEST)
    try {
      const { error, ...rest } = yield call(api.updateName, ID, payload)
      if (error) {
        yield put(actions.updateNameActions.failure(error.text))
        alert(error.text)
      } else if (rest.code === 0) {
        const user = yield call(api.loadBasicInfo, ID)
        yield put(actions.updateNameActions.success(user))
        alert('更新成功 !')
      } else {
        yield put(actions.updateNameActions.failure(rest.message))
        alert(rest.message)
      }
    } catch (e) {
      yield put(actions.updateNameActions.failure(e))
      alert(e)
    }
  }
}

/*
 * sagas about password
 */
function* updatePassword() {
  while (true) {
    const { payload } = yield take(actions.updatePasswordActions.REQUEST)
    if (payload.password === payload.password1) {
      yield put(actions.updatePasswordActions.failure())
      alert('新密码跟原密码一致 !')
    } else {
      try {
        const { error, ...rest } = yield call(api.updatePassword, ID, payload)
        if (error) {
          yield put(actions.updatePasswordActions.failure(error.text))
          alert(error.text)
        } else if (rest.code === 0) {
          yield put(actions.updatePasswordActions.success('changed'))
          alert('更新密码成功 ！')
        } else {
          yield put(actions.updatePasswordActions.failure(rest.message))
          alert(rest.message)
        }
      } catch (e) {
        yield put(actions.updatePasswordActions.failure(e))
        alert(e)
      }
    }
  }
}

/*
 * sagas about email
 */
function* loadEmails() {
  const user = yield select(selectUser)
  if (!isEmptyObj(user)) return
  yield put(actions.loadEmailsActions.request())
  try {
    const response = yield call(api.loadEmails, ID)
    yield put(actions.loadEmailsActions.success(response))
  } catch (e) {
    yield put(actions.loadEmailsActions.failure(e))
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
        const { error, ...rest } = yield call(api.addEmail, ID, { email: payload.email })
        if (error) {
          yield put(actions.addEmailActions.failure(error.text))
          alert(error.text)
        } else if (rest.code === 0) {
          const response = yield call(api.loadEmails, ID)
          yield put(actions.addEmailActions.success(response))
          alert('新增邮箱成功 !')
        } else {
          yield put(actions.addEmailActions.failure(rest.message))
          alert(rest.message)
        }
      } catch (e) {
        yield put(actions.addEmailActions.failure(e))
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
      const { error, ...rest } = yield call(api.deleteEmail, { id: ID, emailId: payload })
      if (error) {
        yield put(actions.deleteEmailActions.failure(error.text))
        alert(error.text)
      } else if (rest.code === 0) {
        const newEmails = emails.filter(e => e.emailId !== payload)
        yield put(actions.deleteEmailActions.success({ newEmails }))
      } else {
        yield put(actions.deleteEmailActions.failure(rest.message))
        alert(rest.message)
      }
    } catch (e) {
      yield put(actions.deleteEmailActions.failure(e))
      alert(e)
    }
  }
}

function* updateEmail() {
  while (true) {
    const { payload } = yield take(actions.updateEmailActions.REQUEST)
    const emails = yield select(selectEmails)
    const eId = emails.find(email => email.default === true).emailId
    const newEmails = [...emails]
    try {
      const { error, ...rest } = yield call(api.updateEmail, { id: ID, emailId: eId }, payload)
      if (error) {
        yield put(actions.updateEmailActions.failure(error.text))
        alert(error.text)
      } else if (rest.code === 0) {
        newEmails.find(email => email.default === true).public = payload.public
        yield put(actions.updateEmailActions.success({ newEmails }))
        alert('设置成功 !')
      } else {
        yield put(actions.updateEmailActions.failure(rest.message))
        alert(rest.message)
      }
    } catch (e) {
      yield put(actions.updateEmailActions.failure(e))
      alert(e)
    }
  }
}

function* sendEmail() {
  while (true) {
    const { payload } = yield take(actions.sendEmailActions.REQUEST)
    const emails = yield select(selectEmails)
    console.log(payload)
    try {
      const { error } = yield call(api.sendEmail, { id: 'fakeId', emailId: payload.id }, { isVerified: payload.isVerified })
      if (error) {
        yield put(actions.sendEmailActions.failure(error.text))
        alert(error.text)
      } else {
        const newEmails = [...emails]
        yield put(actions.sendEmailActions.success({ newEmails }))
        alert('认证邮箱已发送，请登录该邮箱进行认证 !')
      }
    } catch (e) {
      yield put(actions.sendEmailActions.failure(e))
      alert(e)
    }
  }
}

/*
 * sagas about mobile
 */
function* loadMobiles() {
  const user = yield select(selectUser)
  if (!isEmptyObj(user)) return
  yield put(actions.loadMobilesActions.request())
  try {
    const response = yield call(api.loadMobiles, ID)
    yield put(actions.loadMobilesActions.success(response))
  } catch (e) {
    yield put(actions.loadMobilesActions.failure(e))
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
        const { error, ...rest } = yield call(api.addMobile, ID, { mobile: payload.mobile })
        if (error) {
          yield put(actions.addMobileActions.failure(error.text))
          alert(error.text)
        } else if (rest.code === 0) {
          const response = yield call(api.loadMobiles, ID)
          yield put(actions.addMobileActions.success(response))
          alert('手机添加成功 !')
        } else {
          yield put(actions.addMobileActions.failure(rest.message))
          alert(rest.message)
        }
      } catch (e) {
        yield put(actions.addMobileActions.failure(e))
        alert(e)
      }
    }
  }
}

function* deleteMobile() {
  while (true) {
    const { payload } = yield take(actions.deleteMobileActions.REQUEST)
    const mobiles = yield select(selectMobiles)
    try {
      const { error, ...rest } = yield call(api.deleteMobile, { id: ID, mobileId: payload })
      if (error) {
        yield put(actions.deleteMobileActions.failure(error.text))
        alert(error.text)
      } else if (rest.code === 0) {
        const newMobiles = mobiles.filter(e => e.mobileId !== payload)
        yield put(actions.deleteMobileActions.success({ newMobiles }))
      } else {
        yield put(actions.deleteMobileActions.failure(rest.message))
        alert(rest.message)
      }
    } catch (e) {
      yield put(actions.deleteMobileActions.failure(e))
      alert(e)
    }
  }
}


function* updateMobile() {
  while (true) {
    const { payload } = yield take(actions.updateMobileActions.REQUEST)
    const mobiles = yield select(selectMobiles)
    const newMobiles = [...mobiles]
    try {
      const { error } = yield call(api.updateMobile, 'fakeId', payload)
      if (error) {
        yield put(actions.updateMobileActions.failure(error.text))
        alert(error.text)
      } else if (payload.mobile === undefined) {
        newMobiles.find(mobile => mobile.isDefault === true).isPublic = payload.isPublicMobile
        yield put(actions.updateMobileActions.success({ newMobiles }))
        alert('设置成功 !')
      } else {
        newMobiles.map(mobile => mobile.isDefault = false)  // eslint-disable-line no-return-assign, no-param-reassign
        newMobiles.find(mobile => mobile.mobile === payload.mobile).isDefault = true
        newMobiles.find(mobile => mobile.isDefault === true).isPublic = payload.checked
        yield put(actions.updateMobileActions.success({ newMobiles }))
      }
    } catch (e) {
      yield put(actions.updateMobileActions.failure(e))
      alert(e)
    }
  }
}

function* sendMobile() {
  while (true) {
    const { payload } = yield take(actions.sendMobileActions.REQUEST)
    const mobiles = yield select(selectMobiles)
    try {
      const { error } = yield call(api.sendMobile, { id: 'fakeId', mobileId: payload.id }, { isVerified: payload.isVerified })
      if (error) {
        yield put(actions.sendMobileActions.failure(error.text))
        alert(error.text)
      } else {
        const newMobiles = [...mobiles]
        yield put(actions.sendMobileActions.success({ newMobiles }))
        alert('已发送手机认证短信 !')
      }
    } catch (e) {
      yield put(actions.sendMobileActions.failure(e))
      alert(e)
    }
  }
}

export default function* settingsSaga() {
  yield [
    fork(loadBasicInfo),
    fork(updateBasicInfo),
    fork(updateName),
    fork(updatePassword),
    fork(loadEmails),
    fork(addEmail),
    fork(deleteEmail),
    fork(updateEmail),
    fork(sendEmail),
    fork(loadMobiles),
    fork(addMobile),
    fork(deleteMobile),
    fork(updateMobile),
    fork(sendMobile),
  ]
}
