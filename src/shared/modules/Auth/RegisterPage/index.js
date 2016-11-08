import React from 'react'
import Helmet from 'react-helmet'

import RegisterForm from './RegisterForm'
import Styles from './registerPage.css'

class RegisterPage extends React.Component {
  render() {
    return (
      <div className={Styles.RegisterPage}>
        <Helmet title="Sign up" />
        <RegisterForm />
      </div>
    )
  }
}

export default RegisterPage
