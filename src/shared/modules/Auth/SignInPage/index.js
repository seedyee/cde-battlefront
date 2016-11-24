import React from 'react'
import Helmet from 'react-helmet'

import SignInForm from './SignInForm'
import Styles from './index.css'
import Logo from '../Logo'

class SignInPage extends React.Component {
  render() {
    return (
      <div className={Styles.LoginPage}>
        <Helmet title="Sign in" />
        <div className={Styles.content}>
          <Logo />
          <SignInForm />
        </div>
      </div>
    )
  }
}

export default SignInPage
