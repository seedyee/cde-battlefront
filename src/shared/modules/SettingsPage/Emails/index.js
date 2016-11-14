import React, { Component } from 'react'
import Styles from './index.css'
import EmailForm from './EmailForm/index'

class Emails extends Component {
  getEmails = (emails) => Object.values(emails).map(email => (
    <tr key={email.id}>
      <th>{email.email}</th>
      <th>{email.isVerified}</th>
      <th>{`${email.isDefault}_${email.isPublic}`}</th>
    </tr>
  ))

  render() {
    const { ...emails } = this.props.user
    return (
      <div className={Styles.Emails}>
        <h3>查看邮箱{console.log(JSON.stringify(emails, null, 2))}</h3>
        <div className={Styles.emailTable}>
          <table>
            <thead>
              <tr>
                <th>邮箱</th>
                <th>状态</th>
                <th>标识</th>
              </tr>
            </thead>
            <tbody>
              {this.getEmails(emails)}
            </tbody>
          </table>
        </div>
        <EmailForm />
      </div>
    )
  }
}

export default Emails

