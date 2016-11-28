import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Label, Glyphicon, Button } from 'react-bootstrap'

import MobileForm from './MobileForm'
import Styles from './index.css'

class Mobiles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.user.isPublicMobile,
    }
  }

  getMobiles = (mobiles, checked) => Object.values(mobiles).map(m => (
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
      className={Styles.icon}
      onClick={() => (confirm(`您确定删除${mobile}吗？`) ? this.props.deleteMobile(id) : '')}
    />
  )

  setPubilic = (event) => {
    this.setState({ checked: event.target.checked })
    this.props.updateMobile({ isPublicMobile: event.target.checked })
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

  showDedaultBtn = (isDefault, isVerified, mobile, checked) => (
    isDefault === false && isVerified === true ?
      <Button bsStyle="link" onClick={() => (confirm(`您确定设${mobile}为默认手机号码吗？`) ? this.props.updateMobile({ mobile, checked }) : '')} >设为默认</Button> : ''
  )

  showResendBtn = (isDefault, isVerified, id) => (
    isDefault === false && isVerified === false ?
      <Button bsStyle="link" onClick={() => this.props.sendMobile({ id, isVerified })}>重新发送</Button> : ''
  )

  render() {
    const { ...mobiles } = this.props.mobiles
    return (
      <div className={Styles.Mobiles}>
        <h3>查看手机</h3>
        {this.props.mobiles.length === 0 ? '' :
          <div>
            <table className={Styles.mobilesTable}>
              <tbody>{this.getMobiles(mobiles, this.state.checked)}</tbody>
              {this.props.mobiles.some(mobile => mobile.isDefault === true) ?
                <tfoot>
                  <tr><td>公开默认手机：<input type="checkbox" onChange={this.setPubilic} checked={this.state.checked} /></td></tr>
                </tfoot>
                : null
              }
            </table>
          </div>
        }
        <MobileForm />
      </div>
    )
  }
}

import { deleteMobileActions, updateMobileActions, sendMobileActions } from '../actions'

export default connect(
  null,
  {
    deleteMobile: deleteMobileActions.request,
    updateMobile: updateMobileActions.request,
    sendMobile: sendMobileActions.request,
  }
)(Mobiles)

