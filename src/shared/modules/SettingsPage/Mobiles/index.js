import React, { Component } from 'react'
import Styles from './index.css'
import MobileForm from './MobileForm/index'

class Mobiles extends Component {
  getMobiles = (mobiles) => Object.values(mobiles).map(mobile => (
    <tr key={mobile.id}>
      <th>{mobile.mobile}</th>
      <th>{mobile.isVerified}</th>
      <th>{`${mobile.isDefault}_${mobile.isPublic}`}</th>
    </tr>
  ))

  render() {
    const { ...mobiles } = this.props.user
    return (
      <div className={Styles.Mobiles}>
        <h3>查看手机{console.log(JSON.stringify(mobiles, null, 2))}</h3>
        <div className={Styles.mobilesTable}>
          <table>
            <thead>
              <tr>
                <th>手机</th>
                <th>状态</th>
                <th>标识</th>
              </tr>
            </thead>
            <tbody>
              { this.getMobiles(mobiles) }
            </tbody>
          </table>
        </div>
        <div className={Styles.addMobile}>
          <MobileForm />
        </div>
      </div>
    )
  }
}

export default Mobiles

