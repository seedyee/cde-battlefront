import React from 'react'
import Helmet from 'react-helmet'

import LoginForm from './LoginForm'
import Styles from './LoginPage.css'
import logo from './logo.png'
import { Link } from 'react-router'

class LoginPage extends React.Component {
  render() {
    return (
      <div className={Styles.LoginPage}>
        <Helmet title="Sign in" />
        <div className={Styles.content}>
          <div className={Styles.header}>
            <Link to="/" >
              <img className={Styles.logo} alt="cde logo" src={logo} />
            </Link>
            <h3>登录</h3>
          </div>
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default LoginPage
