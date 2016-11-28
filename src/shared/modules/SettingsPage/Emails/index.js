import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Label, Glyphicon, Button } from 'react-bootstrap'

import EmailForm from './EmailForm'
import Styles from './index.css'

class Emails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.user.isPublicEmail,
    }
  }

  getEmails = (emails, checked) => Object.values(emails).map(e => (
    <tr key={e.id}>
      <td>{e.email}</td>
      <td>{this.isDefault(e.isDefault)} {e.isDefault === true ? this.isPublic(e.isPublic) : ''}</td>
      <td>{this.isVerified(e.isVerified)}</td>
      <td>{this.showResendBtn(e.isDefault, e.isVerified, e.id)} {this.showDedaultBtn(e.isDefault, e.isVerified, e.email, checked)}</td>
      <td>{this.getIcon('trash', e.id, e.email)}</td>
    </tr>
  ))

  getIcon = (name, id, email) => (
    <Glyphicon
      glyph={name}
      className={Styles.icon}
      onClick={() => (confirm(`您确定删除${email}吗？`) ? this.props.deleteEmail(id) : '')}
    />
  )

  setPubilic = (event) => {
    this.setState({ checked: event.target.checked })
    this.props.updateEmail({ isPublicEmail: event.target.checked })
  }

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

  showDedaultBtn = (isDefault, isVerified, email, checked) => (
    isDefault === false && isVerified === true ? <Button bsStyle="link" onClick={() => (confirm(`您确定设${email}为默认邮箱吗？`) ? this.props.updateEmail({ email, checked }) : '')}>设为默认</Button> : ''
  )

  showResendBtn = (isDefault, isVerified, id) => (
    isDefault === false && isVerified === false ? <Button bsStyle="link" onClick={() => this.props.sendEmail({ id, isVerified })}>重新发送</Button> : ''
  )

  render() {
    const { ...emails } = this.props.emails
    return (
      <div className={Styles.Emails}>
        <h3>查看邮箱</h3>
        {this.props.emails.length === 0 ? '' :
          <div>
            <table className={Styles.emailTable}>
              <tbody>{this.getEmails(emails, this.state.checked)}</tbody>
              {this.props.emails.some(email => email.isDefault === true) ?
                <tfoot>
                  <tr><td>公开默认邮箱：<input type="checkbox" onChange={this.setPubilic} checked={this.state.checked} /></td></tr>
                </tfoot>
                : null
              }
            </table>
          </div>
        }
        <EmailForm />
      </div>
    )
  }
}

import { deleteEmailActions, updateEmailActions, sendEmailActions } from '../actions'

export default connect(
  null,
  {
    deleteEmail: deleteEmailActions.request,
    updateEmail: updateEmailActions.request,
    sendEmail: sendEmailActions.request,
  }
)(Emails)
