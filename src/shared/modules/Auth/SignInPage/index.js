import React from 'react'
import Helmet from 'react-helmet'
import { Redirect } from 'react-router'

import SignInForm from './SignInForm'
import OtherSignUp from './OtherSignUp'
import Footer from '../../Footer'
import Styles from './index.css'


class SignInPage extends React.Component {
  constructor() {
    super()
    this.state = {
      redirectTo: null,
    }
  }

  redirectTo = () => {
    this.setState({ redirectTo: '/signUp' })
  }

  render() {
    const { redirectTo } = this.state
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
      <div className={Styles.SignInPage}>
        <Helmet title="Sign in" />
        <div className={Styles.content}>
          <SignInForm />
          <p className={Styles.signUp}>
            <button className={Styles.regBtn} type="button" onClick={this.redirectTo}>还没有账户，立即注册</button>
          </p>
          <OtherSignUp />
        </div>
        <Footer />
      </div>
    )
  }
}

export default SignInPage
