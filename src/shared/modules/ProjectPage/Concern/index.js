import React, { Component } from 'react'

import Styles from './index.css'

class Concern extends Component {
  render() {
    return (
      <div className={Styles.Concern}>
        <div className={Styles.titleBar}>
          <h3 className={Styles.title}>我关注的</h3>
        </div>
      </div>
    )
  }
}

export default Concern
