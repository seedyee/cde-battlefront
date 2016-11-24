import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Label, Glyphicon, Button } from 'react-bootstrap'

import { deleteEmailActions } from '../actions'
import EmailForm from './EmailForm'
import Styles from './index.css'

class Emails extends Component {
  getEmails = (emails) => Object.values(emails).map(e => (
    <tr key={e.id}>
      <th>{e.email}</th>
      <th>{this.isDefault(e.isDefault)} {this.isPublic(e.isPublic)}</th>
      <th>{this.isVerified(e.isVerified)}</th>
      <th>{this.showResendBtn(e.isDefault, e.isVerified)} {this.showDedaultBtn(e.isDefault, e.isVerified)}</th>
      <th>{this.getIcon('trash', e.id, e.email)}</th>
    </tr>
  ))

  getIcon = (name, id, email) => <Glyphicon glyph={name} className={Styles.icon} onClick={() => (confirm(`您确定删除${email}吗？`) ? this.props.deleteEmail(id) : '')} />

  isDefault = (isDefault) => (
    isDefault === true ? <Label bsStyle="success" className={Styles.defaultIcon}>默认</Label> : ''
  )

  isPublic = (isPublic) => (
    isPublic === true ? <Label bsStyle="success" className={Styles.defaultIcon}>公开</Label> : <Label bsStyle="default" className={Styles.defaultIcon}>私有</Label>
  )

  isVerified = (isVerified) => (
    isVerified === true ? <Label bsStyle="success" className={Styles.defaultIcon}>已认证</Label> : <Label bsStyle="warning" className={Styles.defaultIcon}>未认证</Label>
  )

  showDedaultBtn = (isDefault, isVerified) => (
    isDefault === false && isVerified === true ? <Button bsStyle="link">设为默认</Button> : ''
  )

  showResendBtn = (isDefault, isVerified) => (
    isDefault === false && isVerified === false ? <Button bsStyle="link">重新发送</Button> : ''

  )


  render() {
    const { ...emails } = this.props.emails
    return (
      <div className={Styles.Emails}>
        <h3>查看邮箱</h3>
        <div>
          <table className={Styles.emailTable}>
            <tbody>{this.getEmails(emails)}</tbody>
          </table>
        </div>
        <EmailForm />
      </div>
    )
  }
}

export default connect(null, { deleteEmail: deleteEmailActions.request })(Emails)
