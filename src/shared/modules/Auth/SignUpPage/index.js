import React from 'react'
import Helmet from 'react-helmet'

import SignUpForm from './SignUpForm'
import Styles from './index.css'
import Logo from '../Logo'

class SignUpPage extends React.Component {
  render() {
    return (
      <div className={Styles.signUpPage}>
        <Helmet title="Sign up" />
        <div className={Styles.content}>
          <Logo title="注&nbsp;&nbsp;册" />
          <SignUpForm />
        </div>
      </div>
    )
  }
}

export default SignUpPage
