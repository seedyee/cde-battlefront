import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../shared/configStore'
import App from '../shared/modules/App'
import ReactHotLoader from './ReactHotLoader'

const container = document.querySelector('#app')
const initialState = window.APP_STATE || {} // eslint-disable-line
const store = configureStore(initialState)
// start rootSagas on client
store.startAbortableSaga()

function renderApp(AppComponent) {
  render(
    <ReactHotLoader>
      <BrowserRouter>
        <Provider store={store}>
          <AppComponent />
        </Provider>
      </BrowserRouter>
    </ReactHotLoader>,
    container
  )
}

// The following is needed so that we can support hot reloading our application.
if (process.env.NODE_ENV === 'development' && module.hot) {
  // Accept changes to this file for hot reloading.
  module.hot.accept('./index.js')

  // Any changes to our App will cause a hotload re-render.
  module.hot.accept(
    '../shared/modules/App',
    () => renderApp(require('../shared/modules/App').default) // eslint-disable-line
  )
}

renderApp(App)
