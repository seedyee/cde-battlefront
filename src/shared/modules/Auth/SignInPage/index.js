import React from 'react'
import Helmet from 'react-helmet'
import { Redirect } from 'react-router'

import SignInForm from './SignInForm'
import Styles from './index.css'
import logo from '../../assets/github.png'

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
          <div>
            <p className={Styles.signInWay}>其他方式进行登录</p>
            <ul className={Styles.ul}>
              <li><a href=""><img src={logo} alt="" /></a></li>
            </ul>
          </div>
        </div>
        <div className={Styles.footer}>
          <ul>
            <li><a href="">返回首页</a></li>
            <li><a href="">关于CDE</a></li>
            <li><a href="">招贤纳士</a></li>
            <li><a href="">服务条款</a></li>
            <li><a href="">隐私策略</a></li>
            <li><a href="">帮助中心</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">App</a></li>
            <li><a href="">Shop</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SignInPage
