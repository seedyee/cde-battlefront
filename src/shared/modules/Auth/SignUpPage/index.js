import React from 'react'
import Helmet from 'react-helmet'

import SignUpForm from './SignUpForm'
import Footer from '../../Footer'
import Styles from './index.css'

class SignUpPage extends React.Component {
  render() {
    return (
      <div className={Styles.signUpPage}>
        <Helmet title="Sign up" />
        <div className={Styles.content}>
          <SignUpForm />
        </div>
        <Footer />
      </div>
    )
  }
}

export default SignUpPage
