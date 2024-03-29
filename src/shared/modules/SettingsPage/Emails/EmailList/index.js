import React, { Component } from 'react'
import {
  OverlayTrigger,
  Tooltip,
  Label,
  Glyphicon,
  Button,
} from 'react-bootstrap'

import Styles from './index.css'

class EmailList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.user.publicEmail,
    }
  }

  getEmails = (emails, checked) => emails.map(e => (
    <tr key={e.emailId}>
      <td>
        {e.email}
      </td>
      <td>
        {this.isDefault(e.default)}
        {e.default === true ? this.isPublic(e.public) : ''}
      </td>
      <td>
        {this.isVerified(e.verified)}
      </td>
      <td>
        {this.showResendBtn(e.default, e.verified, e.emailId)}
        {this.showDedaultBtn(e.default, e.verified, e.email, checked)}
      </td>
      <td>
        {e.default === true ? this.getIcon('trash') : this.getClickableIcon('trash', e.emailId, e.email)}
      </td>
    </tr>
  ))

  getIcon = (name) => (
    <OverlayTrigger placement="bottom" overlay={this.tooltip('默认邮箱不能删除')}>
      <Glyphicon
        glyph={name}
        className={Styles.icon}
      />
    </OverlayTrigger>
  )

  getClickableIcon = (name, id, email) => (
    <OverlayTrigger placement="bottom" overlay={this.tooltip('删除邮箱')}>
      <Glyphicon
        glyph={name}
        className={Styles.clickableIcon}
        onClick={() => (confirm(`您确定删除${email}吗？`) ? this.props.deleteEmail(id) : '')}
      />
    </OverlayTrigger>
  )

  tooltip = (tip) => (
    <Tooltip id="tooltip"><strong className={Styles.tooltip}>{tip}</strong></Tooltip>
  )

  pubilicSwitch = (event) => {
    this.setState({ checked: event.target.checked })
    this.props.updateEmail({ public: event.target.checked })
  }

  isDefault = (isDefault) => (
    isDefault === true ? <Label bsStyle="success" className={Styles.labelIcon}>默认</Label> : ''
  )

  isPublic = (isPublic) => (
    isPublic === true ? <Label bsStyle="default" className={Styles.labelIcon}>公开</Label>
                      : <Label bsStyle="default" className={Styles.labelIcon}>私有</Label>
  )

  isVerified = (isVerified) => (
    isVerified === true ? <Label bsStyle="success" className={Styles.labelIcon}>已认证</Label>
                        : <Label bsStyle="warning" className={Styles.labelIcon}>待认证</Label>
  )

  showDedaultBtn = (isDefault, isVerified, email, checked) => (
    isDefault === false && isVerified === true ?
      <Button bsStyle="link" onClick={() => (confirm(`您确定设${email}为默认邮箱吗？`) ? this.props.updateEmail({ email, checked }) : '')}>
        设为默认
      </Button>
      : ''
  )

  showResendBtn = (isDefault, isVerified, id) => (
    isDefault === false && isVerified === false ?
      <Button bsStyle="link" onClick={() => this.props.sendEmail({ id, isVerified })}>
        发送验证邮件
      </Button>
      : ''
  )

  render() {
    const { checked } = this.state
    const { emails } = this.props
    return (
      <table className={Styles.emailTable}>
        <tbody>{this.getEmails(emails, checked)}</tbody>
        {emails.some(email => email.default === true) ?
          <tfoot>
            <tr>
              <td>
                公开默认邮箱：<input type="checkbox" onChange={this.pubilicSwitch} checked={checked} />
              </td>
            </tr>
          </tfoot>
          : null
        }
      </table>
    )
  }
}

export default EmailList
