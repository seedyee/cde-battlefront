import React, { Component } from 'react'
import Styles from './index.css'
import MobileForm from './MobileForm/index'

import { Label, Glyphicon } from 'react-bootstrap'

class Mobiles extends Component {
  getMobiles = (mobiles) => Object.values(mobiles).map(mobile => (
    <tr key={mobile.id}>
      <th>{mobile.mobile}</th>
      <th>{this.isVerified(mobile.isVerified)}</th>
      <th>{this.isDefault(mobile.isDefault)} {this.isPublic(mobile.isPublic)}</th>
      <th>{this.getIcon('trash')}</th>
    </tr>
  ))

  getIcon = (name) => <Glyphicon glyph={name} className={Styles.icon} />

  isVerified = (s) => (
    s === 1 ? <Label bsStyle="success">Verified</Label> : <Label bsStyle="warning">Unverified</Label>
  )

  isDefault = (s) => (
    s === 1 ? <Label bsStyle="success">Primary</Label> : ''
  )

  isPublic = (s) => (
    s === 1 ? <Label bsStyle="success">Public</Label> : <Label bsStyle="default">Private</Label>
  )

  render() {
    const { ...mobiles } = this.props.user
    return (
      <div className={Styles.Mobiles}>
        <h3>查看手机{console.log(JSON.stringify(mobiles, null, 2))}</h3>
        <div className={Styles.mobilesTable}>
          <table>
            {this.getMobiles(mobiles)}
          </table>
        </div>
        <MobileForm />
      </div>
    )
  }
}

export default Mobiles

