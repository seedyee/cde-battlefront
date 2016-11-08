import React from 'react'
import RegisterForm from './RegisterForm'
import Styles from './registerPage.css'

class RegisterPage extends React.Component {
  render() {
    return (
      <div className={Styles.RegisterPage}>
        <RegisterForm />
      </div>
    )
  }
}

export default RegisterPage
