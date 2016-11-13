import React, { Component } from 'react'
import Styles from './index.css'
import MobileForm from './MobileForm/index'

class Mobiles extends Component {
  render() {
    return (
      <div className={Styles.Mobiles}>
        <h3>查看手机</h3>
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
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
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

