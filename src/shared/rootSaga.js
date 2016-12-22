import { fork, cancel, take } from 'redux-saga/effects'
import reduxFormSubmitSaga from './modules/utils/reduxFormSubmitSaga'
import authSaga from './modules/Auth/sagas'
import settingsSaga from './modules/SettingsPage/sagas'
import profileSaga from './modules/ProfilePage/sagas'
import projectSaga from './modules/ProjectPage/sagas'

export function* rootSaga() {
  yield [
    fork(reduxFormSubmitSaga),
    fork(authSaga),
    fork(settingsSaga),
    fork(profileSaga),
    fork(projectSaga),
  ]
}
export const CANCEL_SAGAS_HMR = 'CANCEL_SAGAS_HMR'

function createAbortableSaga(saga) {
  if (process.env.NODE_ENV === 'development') {
    return function* main() {
      const sagaTask = yield fork(saga)
      yield take(CANCEL_SAGAS_HMR)
      yield cancel(sagaTask)
    }
  }
  return saga
}

const SagaManager = {
  startSaga(sagaMiddleware) {
    return sagaMiddleware.run(createAbortableSaga(rootSaga))
  },
  cancelSaga(store) {
    store.dispatch({
      type: CANCEL_SAGAS_HMR,
    })
  },
}

export default SagaManager

