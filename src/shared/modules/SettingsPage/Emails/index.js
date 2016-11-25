import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Label, Glyphicon, Button } from 'react-bootstrap'

import EmailForm from './EmailForm'
import Styles from './index.css'

class Emails extends Component {
  getEmails = (emails) => Object.values(emails).map(e => (
    <tr key={e.id}>
      <th>{e.email}</th>
      <th>{this.isDefault(e.isDefault)} {e.isDefault === true ? this.isPublic(e.isPublic) : ''}</th>
      <th>{this.isVerified(e.isVerified)}</th>
      <th>{this.showResendBtn(e.isDefault, e.isVerified, e.id)} {this.showDedaultBtn(e.isDefault, e.isVerified, e.email)}</th>
      <th>{this.getIcon('trash', e.id, e.email)}</th>
    </tr>
  ))

  getIcon = (name, id, email) => (
    <Glyphicon
      glyph={name}
      className={Styles.icon}
      onClick={() => (confirm(`您确定删除${email}吗？`) ? this.props.deleteEmail(id) : '')}
    />
  )

  isDefault = (isDefault) => (
    isDefault === true ? <Label bsStyle="success" className={Styles.defaultIcon}>默认</Label> : ''
  )

  isPublic = (isPublic) => (
    isPublic === true ? <Label bsStyle="default" className={Styles.defaultIcon}>公开</Label>
                      : <Label bsStyle="default" className={Styles.defaultIcon}>私有</Label>
  )

  isVerified = (isVerified) => (
    isVerified === true ? <Label bsStyle="success" className={Styles.defaultIcon}>已认证</Label>
                        : <Label bsStyle="warning" className={Styles.defaultIcon}>未认证</Label>
  )

  showDedaultBtn = (isDefault, isVerified, email) => (
    isDefault === false && isVerified === true ? <Button bsStyle="link" onClick={() => (confirm(`您确定设${email}为默认邮箱吗？`) ? this.props.setEmail({ email }) : '')}>设为默认</Button> : ''
  )

  showResendBtn = (isDefault, isVerified, id) => (
    isDefault === false && isVerified === false ? <Button bsStyle="link" onClick={() => this.props.sendEmail({ id, isVerified })}>重新发送</Button> : ''
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

import { updateUserActions, deleteEmailActions, updateEmailActions } from '../actions'

export default connect(
  null,
  {
    deleteEmail: deleteEmailActions.request,
    setEmail: updateUserActions.request,
    sendEmail: updateEmailActions.request,
  }
)(Emails)
