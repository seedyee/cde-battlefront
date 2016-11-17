import React, { Component } from 'react'
import { connect } from 'react-redux'
import Styles from './index.css'
import MobileForm from './MobileForm/index'
import { Label, Glyphicon, Button } from 'react-bootstrap'
import { deleteMobileActions } from '../actions'

class Mobiles extends Component {
  getMobiles = (mobiles) => Object.values(mobiles).map(mobile => (
    <tr key={mobile.id}>
      <th className={Styles.th1}>{mobile.mobile}</th>
      <th>{this.isDefault(mobile.isDefault)} {this.isPublic(mobile.isPublic)}</th>
      <th>{this.isVerified(mobile.isVerified)}</th>
      <th className={Styles.th4}>{this.showBtn(mobile.isVerified)}</th>
      <th className={Styles.th5}>{this.getIcon('trash', mobile.id)}</th>
    </tr>
  ))

  getIcon = (name, id) => <Glyphicon glyph={name} className={Styles.icon} onClick={() => this.props.deleteMobile(id)} />

  isVerified = (s) => (
    s === true ? <Label bsStyle="success">已认证</Label> : <Label bsStyle="warning">未认证</Label>
  )

  isDefault = (s) => (
    s === true ? <Label bsStyle="success">默认</Label> : ''
  )

  isPublic = (s) => (
    s === true ? <Label bsStyle="success">公开</Label> : <Label bsStyle="default">私有</Label>
  )

  showBtn = (s) => (
    s === true ? '' : <Button bsStyle="link">认证电话</Button>
  )

  render() {
    const { ...mobiles } = this.props.mobiles
    return (
      <div className={Styles.Mobiles}>
        <h3>查看手机</h3>
        <div className={Styles.mobilesTable}>
          <table>
            <tbody>{this.getMobiles(mobiles)}</tbody>
          </table>
        </div>
        <MobileForm />
      </div>
    )
  }
}

export default connect(null, { deleteMobile: deleteMobileActions.request })(Mobiles)

