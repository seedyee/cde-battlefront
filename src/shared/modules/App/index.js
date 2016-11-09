import React from 'react'
import Helmet from 'react-helmet'
import { camelCase } from 'lodash'
import { Match, Miss } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css'
/* import 'bootstrap/dist/css/bootstrap-watch.min.css'*/
import 'sanitize.css/sanitize.css'

import './Fonts.css'
import Styles from './App.css'
import './reset.css'

import Nav from '../Nav'
import HomePage from '../HomePage'
import DashboardPage from '../DashboardPage'
import AboutPage from '../AboutPage'
import LoginPage from '../Auth/LoginPage'
import RegisterPage from '../Auth/RegisterPage'
import NotFoundPage from '../NotFoundPage'
import SettingsPage from '../SettingsPage'

const websiteDescription = 'A NodeJS V6 Universal React Boilerplate with an Amazing Developer Experience.'

if (process.env.NODE_ENV === 'development') {
  console.log('ES Modules Supported:', camelCase('hello-world') === 'helloWorld')
}

const App = () => (
  <main>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      titleTemplate="CDE - %s"
      defaultTitle=""
      meta={[
        { name: 'charset', content: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: websiteDescription },
      ]}
    />
    <div className={Styles.App}>
      <Match pattern="*" component={Nav} />
      <div className={Styles.content}>
        <Match exactly pattern="/" component={HomePage} />
        <Match pattern="/home" component={HomePage} />
        <Match pattern="/about" component={AboutPage} />
        <Match pattern="/dashboard" component={DashboardPage} />
        <Match pattern="/login" component={LoginPage} />
        <Match pattern="/register" component={RegisterPage} />
        <Match pattern="/settings/:name" component={SettingsPage} />
        <Miss component={NotFoundPage} />
      </div>
    </div>
  </main>
)

export default App

