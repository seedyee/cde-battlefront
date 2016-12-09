import React, { Component } from 'react'

import Styles from './index.css'

class Security extends Component {
  render() {
    return (
      <div className={Styles.Security}>
        <div className={Styles.sessions}>
          <h3>会话信息</h3>
          <p>这是已登录您的帐户的设备的列表。可撤销您不认识的任何会话</p>
        </div>
        <div className={Styles.log}>
          <h3>安全日志</h3>
          <p>这是涉及您的帐户的重要事件的安全日志</p>
        </div>
      </div>
    )
  }
}

export default Security
