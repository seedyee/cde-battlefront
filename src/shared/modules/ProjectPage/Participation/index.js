import React, { Component } from 'react'

import Styles from './index.css'

class Participation extends Component {
  render() {
    return (
      <div className={Styles.Participation}>
        <div className={Styles.titleBar}>
          <h3 className={Styles.title}>我参与的</h3>
        </div>
      </div>
    )
  }
}

export default Participation
