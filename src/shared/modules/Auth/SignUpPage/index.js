import React from 'react'
import Helmet from 'react-helmet'


import SignUpForm from './SignUpForm'
import Styles from './index.css'

class SignUpPage extends React.Component {
  render() {
    return (
      <div className={Styles.signUpPage}>
        <Helmet title="Sign up" />
        <div className={Styles.content}>
          <SignUpForm />
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

export default SignUpPage
