import React, { Component } from 'react'
import Styles from './index.css'
import UserNameForm from './UserNameForm/index'
import PasswordForm from './PasswordForm/index'

class Account extends Component {
  render() {
    return (
      <div className={Styles.Account}>
        <div className={Styles.userName}>
          <h3>修改用户名</h3>
          <UserNameForm />
        </div>
        <div className={Styles.passwordEdit}>
          <h3>修改密码</h3>
          <PasswordForm />
        </div>
      </div>
    )
  }
}

export default Account

