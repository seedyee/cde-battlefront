import React, { Component } from 'react'

import Styles from './index.css'

class Creation extends Component {
  render() {
    return (
      <div className={Styles.Creation}>
        <div className={Styles.titleBar}>
          <h3 className={Styles.title}>我创建的</h3>
        </div>
      </div>
    )
  }
}

export default Creation
