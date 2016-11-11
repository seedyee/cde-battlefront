/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux'
import { reducer as formReducers } from 'redux-form'
import authReducers from './modules/Auth/reducers'
import settingsReducers from './modules/SettingsPage/reducers'
import profileReducers from './modules/ProfilePage/reducers'

export default combineReducers({
  form: formReducers,
  auth: authReducers,
  settings: settingsReducers,
  profile: profileReducers,
})
