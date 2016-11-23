import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Label, Glyphicon, Button } from 'react-bootstrap'

import { deleteEmailActions } from '../actions'
import EmailForm from './EmailForm'
import Styles from './index.css'

class Emails extends Component {
  getEmails = (emails) => Object.values(emails).map(email => (
    <tr className={Styles.table_tr} key={email.id}>
      <th className={Styles.table_th1}>{email.email}</th>
      <th className={Styles.table_th2}>{this.isDefault(email.isDefault)} {this.isPublic(email.isPublic)}</th>
      <th>{this.isVerified(email.isVerified)}</th>
      <th className={Styles.table_th4}>{this.showBtn(email.isVerified)}</th>
      <th className={Styles.table_th5}>{this.getIcon('trash', email.id, email.email)}</th>
    </tr>
  ))

  getIcon = (name, id, email) => <Glyphicon glyph={name} className={Styles.icon} onClick={() => (confirm(`您确定删除${email}吗？`) ? this.props.deleteEmail(id) : '')} />

  isVerified = (s) => (
    s === true ? <Label bsStyle="success">已认证</Label> : <Label bsStyle="warning">未认证</Label>
  )

  isDefault = (s) => (
    s === true ? <Label bsStyle="success">默认</Label> : ''
  )

  isPublic = (s) => (
    s === true ? <Label bsStyle="success">公开</Label> : <Label bsStyle="default">私有</Label>
  )

  showBtn = (s) => (
    s === true ? '' : <Button bsStyle="link">认证邮箱</Button>
  )

  render() {
    const { ...emails } = this.props.emails
    return (
      <div className={Styles.Emails}>
        <h3>查看邮箱</h3>
        <div className={Styles.emailTable}>
          <table className={Styles.table}>
            <tbody>{this.getEmails(emails)}</tbody>
          </table>
        </div>
        <EmailForm />
      </div>
    )
  }
}

export default connect(null, { deleteEmail: deleteEmailActions.request })(Emails)
