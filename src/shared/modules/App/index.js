import React from 'react'
import Helmet from 'react-helmet'
import { camelCase } from 'lodash'
import { Match, Miss } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'sanitize.css/sanitize.css'
import './fonts.css'
import './reset.css'
import Styles from './index.css'

import Nav from '../Nav'
import HomePage from '../HomePage'
import SignInPage from '../Auth/SignInPage'
import SignUpPage from '../Auth/SignUpPage'
import NotFoundPage from '../NotFoundPage'
import ProfilePage from '../ProfilePage'
import SettingsPage from '../SettingsPage'
import ProjectPage from '../ProjectPage'

const websiteDescription = '深圳习得易网络有限公司是致力于为广大的互联网开发者打造一站式自动化互联网软件服务平台。'

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
        { name: 'keywords', content: 'CDE, cde.io, 习得易, node-matrix, 可视化编程项目托管, 可视化编程组件, 一键部署, 项目管理, 团队协作' },
        { name: 'description', content: websiteDescription },
      ]}
    />
    <div className={Styles.App}>
      <Match pattern="*" component={Nav} />
      <div className={Styles.content}>
        <Match exactly pattern="/" component={HomePage} />
        <Match pattern="/home" component={HomePage} />
        <Match pattern="/signIn" component={SignInPage} />
        <Match pattern="/signUp" component={SignUpPage} />
        <Match pattern="/profile" component={ProfilePage} />
        <Match pattern="/settings/:name" component={SettingsPage} />
        <Match pattern="/project/:name" component={ProjectPage} />
        <Miss component={NotFoundPage} />
      </div>
    </div>
  </main>
)

export default App

