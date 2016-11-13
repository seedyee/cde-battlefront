import React, { Component } from 'react'
import Styles from './index.css'
import EmailForm from './EmailForm/index'

class Emails extends Component {
  render() {
    return (
      <div className={Styles.Emails}>
        <h3>查看邮箱</h3>
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
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={Styles.addEmail}>
          <EmailForm />
        </div>
      </div>
    )
  }
}

export default Emails

