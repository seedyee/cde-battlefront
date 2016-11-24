import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Label, Glyphicon, Button } from 'react-bootstrap'

import MobileForm from './MobileForm'
import Styles from './index.css'

class Mobiles extends Component {
  getMobiles = (mobiles) => Object.values(mobiles).map(m => (
    <tr key={m.id}>
      <th>{m.mobile}</th>
      <th>{this.isDefault(m.isDefault)} {m.isDefault === true ? this.isPublic(m.isPublic) : ''}</th>
      <th>{this.isVerified(m.isVerified)}</th>
      <th>{this.showResendBtn(m.isDefault, m.isVerified, m.id)} {this.showDedaultBtn(m.isDefault, m.isVerified, m.mobile)}</th>
      <th>{this.getIcon('trash', m.id, m.mobile)}</th>
    </tr>
  ))

  getIcon = (name, id, mobile) => <Glyphicon glyph={name} className={Styles.icon} onClick={() => (confirm(`您确定删除${mobile}吗？`) ? this.props.deleteMobile(id) : '')} />

  isDefault = (isDefault) => (
    isDefault === true ? <Label bsStyle="success" className={Styles.defaultIcon}>默认</Label> : ''
  )

  isPublic = (isPublic) => (
    isPublic === true ? <Label bsStyle="default" className={Styles.defaultIcon}>公开</Label> : <Label bsStyle="default" className={Styles.defaultIcon}>私有</Label>
  )

  isVerified = (isVerified) => (
    isVerified === true ? <Label bsStyle="success" className={Styles.defaultIcon}>已认证</Label> : <Label bsStyle="warning" className={Styles.defaultIcon}>未认证</Label>
  )

  showDedaultBtn = (isDefault, isVerified, mobile) => (
    isDefault === false && isVerified === true ? <Button bsStyle="link" onClick={() => (confirm(`您确定设${mobile}为默认手机号码吗？`) ? this.props.setMobile({ mobile }) : '')}>设为默认</Button> : ''
  )

  showResendBtn = (isDefault, isVerified, id) => (
    isDefault === false && isVerified === false ? <Button bsStyle="link" onClick={() => this.props.sendMobile({ id, isVerified })}>重新发送</Button> : ''
  )

  render() {
    const { ...mobiles } = this.props.mobiles
    return (
      <div className={Styles.Mobiles}>
        <h3>查看手机</h3>
        <div>
          <table className={Styles.mobilesTable}>
            <tbody>{this.getMobiles(mobiles)}</tbody>
          </table>
        </div>
        <MobileForm />
      </div>
    )
  }
}

import { updateUserActions, deleteMobileActions, updateMobileActions } from '../actions'

export default connect(
  null,
  {
    deleteMobile: deleteMobileActions.request,
    setMobile: updateUserActions.request,
    sendMobile: updateMobileActions.request,
  }
)(Mobiles)

