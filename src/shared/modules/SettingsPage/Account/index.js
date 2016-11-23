import React, { Component } from 'react'

import UserNameForm from './UserNameForm'
import PasswordForm from './PasswordForm'
import Styles from './index.css'

class Account extends Component {
  render() {
    return (
      <div className={Styles.Account}>
        <div className={Styles.userName}>
          <h3>修改用户名</h3>
          <UserNameForm initialValues={this.props.initialValues} />
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

