import React, { Component } from 'react'
import Styles from './index.css'
import EmailForm from './EmailForm/index'

import { Label, Glyphicon } from 'react-bootstrap'

class Emails extends Component {
  getEmails = (emails) => Object.values(emails).map(email => (
    <tr key={email.id}>
      <th>{email.email}</th>
      <th>{this.isVerified(email.isVerified)}</th>
      <th>{this.isDefault(email.isDefault)} {this.isPublic(email.isPublic)}</th>
      <th>{this.getIcon('trash')}</th>
    </tr>
  ))

  getIcon = (name) => <Glyphicon glyph={name} className={Styles.icon} />

  isVerified = (s) => (
    s === 1 ? <Label bsStyle="success">Verified</Label> : <Label bsStyle="warning">Unverified</Label>
  )

  isDefault = (s) => (
    s === 1 ? <Label bsStyle="success" className={Styles.mark}>Primary</Label> : ''
  )

  isPublic = (s) => (
    s === 1 ? <Label bsStyle="success">Public</Label> : <Label bsStyle="default">Private</Label>
  )

  render() {
    const { ...emails } = this.props.user
    return (
      <div className={Styles.Emails}>
        <h3>查看邮箱{console.log(JSON.stringify(emails, null, 2))}</h3>
        <div className={Styles.emailTable}>
          <table>
            {this.getEmails(emails)}
          </table>
        </div>
        <EmailForm />
      </div>
    )
  }
}

export default Emails

