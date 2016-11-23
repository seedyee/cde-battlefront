import React, { Component } from 'react'

import Styles from './index.css'

class Security extends Component {
  render() {
    return (
      <div className={Styles.Security}>
        <div className={Styles.sessions}>
          <h3>会话信息</h3>
        </div>
        <div className={Styles.log}>
          <h3>安全日志</h3>
        </div>
      </div>
    )
  }
}

export default Security
