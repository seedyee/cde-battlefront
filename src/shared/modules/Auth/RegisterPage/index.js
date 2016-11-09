import React from 'react'
import Helmet from 'react-helmet'

import RegisterForm from './RegisterForm'
import Styles from './registerPage.css'
import Logo from '../Logo'

class RegisterPage extends React.Component {
  render() {
    return (
      <div className={Styles.RegisterPage}>
        <Helmet title="Sign up" />
        <div className={Styles.content}>
          <Logo title="注册" />
          <RegisterForm />
        </div>
      </div>
    )
  }
}

export default RegisterPage
