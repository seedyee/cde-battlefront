import React, { Component } from 'react'
import { Label, Glyphicon, Button } from 'react-bootstrap'

import Styles from './index.css'

class MobileList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.user.isPublicMobile,
    }
  }

  getMobiles = (mobiles, checked) => mobiles.map(m => (
    <tr key={m.id}>
      <td>{m.mobile}</td>
      <td>{this.isDefault(m.isDefault)} {m.isDefault === true ? this.isPublic(m.isPublic) : ''}</td>
      <td>{this.isVerified(m.isVerified)}</td>
      <td>{this.showResendBtn(m.isDefault, m.isVerified, m.id)} {this.showDedaultBtn(m.isDefault, m.isVerified, m.mobile, checked)}</td>
      <td>{this.getIcon('trash', m.id, m.mobile)}</td>
    </tr>
  ))

  getIcon = (name, id, mobile) => (
    <Glyphicon
      glyph={name}
      className={Styles.trashIcon}
      onClick={() => (confirm(`您确定删除${mobile}吗？`) ? this.props.deleteMobile(id) : '')}
    />
  )

  pubilicSwitch = (event) => {
    this.setState({ checked: event.target.checked })
    this.props.updateMobile({ isPublicMobile: event.target.checked })
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
                        : <Label bsStyle="warning" className={Styles.labelIcon}>未认证</Label>
  )

  showDedaultBtn = (isDefault, isVerified, mobile, checked) => (
    isDefault === false && isVerified === true ?
      <Button bsStyle="link" onClick={() => (confirm(`您确定设${mobile}为默认手机号码吗？`) ? this.props.updateMobile({ mobile, checked }) : '')} >设为默认</Button> : ''
  )

  showResendBtn = (isDefault, isVerified, id) => (
    isDefault === false && isVerified === false ?
      <Button bsStyle="link" onClick={() => this.props.sendMobile({ id, isVerified })}>重新发送</Button> : ''
  )

  render() {
    const { checked } = this.state
    const { mobiles } = this.props
    return (
      <table className={Styles.mobilesTable}>
        <tbody>{this.getMobiles(mobiles, checked)}</tbody>
        {this.props.mobiles.some(mobile => mobile.isDefault === true) ?
          <tfoot>
            <tr><td>公开默认手机：<input type="checkbox" onChange={this.pubilicSwitch} checked={checked} /></td></tr>
          </tfoot>
          : null
        }
      </table>
    )
  }
}

export default MobileList

