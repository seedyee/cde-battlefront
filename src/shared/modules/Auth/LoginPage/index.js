import React from 'react'
import Helmet from 'react-helmet'

import LoginForm from './LoginForm'
import Styles from './LoginPage.css'
import Logo from '../Logo'
class LoginPage extends React.Component {
  render() {
    return (
      <div className={Styles.LoginPage}>
        <Helmet title="Sign in" />
        <div className={Styles.content}>
          <Logo title="登录" />
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default LoginPage
