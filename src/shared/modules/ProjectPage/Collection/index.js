import React, { Component } from 'react'

import Styles from './index.css'

class Collection extends Component {
  render() {
    return (
      <div className={Styles.Collection}>
        <div className={Styles.titleBar}>
          <h3 className={Styles.title}>我收藏的</h3>
        </div>
      </div>
    )
  }
}

export default Collection
