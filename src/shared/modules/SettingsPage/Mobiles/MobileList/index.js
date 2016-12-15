import React, { Component } from 'react'
import { Label, Glyphicon, Button } from 'react-bootstrap'

import Styles from './index.css'

class MobileList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.user.publicMobile,
    }
  }

  getMobiles = (mobiles, checked) => mobiles.map(m => (
    <tr key={m.mobileId}>
      <td>{m.mobile}</td>
      <td>{this.isDefault(m.default)} {m.default === true ? this.isPublic(m.public) : ''}</td>
      <td>{this.isVerified(m.verified)}</td>
      <td>{this.showResendBtn(m.default, m.verified, m.mobileId)} {this.showDedaultBtn(m.default, m.verified, m.mobile, checked)}</td>
      <td>{this.getIcon('trash', m.mobileId, m.mobile)}</td>
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
    this.props.updateMobile({ public: event.target.checked })
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

  showDedaultBtn = (isDefault, isVerified, mobile, checked) => (
    isDefault === false && isVerified === true ?
      <Button bsStyle="link" onClick={() => (confirm(`您确定设${mobile}为默认手机号码吗？`) ? this.props.updateMobile({ mobile, checked }) : '')} >设为默认</Button> : ''
  )

  showResendBtn = (isDefault, isVerified, id) => (
    isDefault === false && isVerified === false ?
      <Button bsStyle="link" onClick={() => this.props.sendMobile({ id, isVerified })}>发送验证短信</Button> : ''
  )

  render() {
    const { checked } = this.state
    const { mobiles } = this.props
    return (
      <table className={Styles.mobilesTable}>
        <tbody>{this.getMobiles(mobiles, checked)}</tbody>
        {mobiles.some(mobile => mobile.default === true) ?
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

