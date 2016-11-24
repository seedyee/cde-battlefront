import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Label, Glyphicon, Button } from 'react-bootstrap'

import MobileForm from './MobileForm'
import { deleteMobileActions } from '../actions'
import Styles from './index.css'

class Mobiles extends Component {
  getMobiles = (mobiles) => Object.values(mobiles).map(m => (
    <tr key={m.id}>
      <th>{m.mobile}</th>
      <th>{this.isDefault(m.isDefault)} {this.isPublic(m.isPublic)}</th>
      <th>{this.isVerified(m.isVerified)}</th>
      <th>{this.showResendBtn(m.isDefault, m.isVerified)} {this.showDedaultBtn(m.isDefault, m.isVerified)}</th>
      <th>{this.getIcon('trash', m.id, m.mobile)}</th>
    </tr>
  ))

  getIcon = (name, id, mobile) => <Glyphicon glyph={name} className={Styles.icon} onClick={() => (confirm(`您确定删除${mobile}吗？`) ? this.props.deleteMobile(id) : '')} />

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

export default connect(null, { deleteMobile: deleteMobileActions.request })(Mobiles)

