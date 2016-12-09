import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'

import AddForm from './AddForm'
import Styles from './index.css'

class Add extends Component {
  render() {
    return (
      <div className={Styles.Add}>
        <div className={Styles.titleBar}>
          <h3 className={Styles.title}>
            <Glyphicon glyph="object-align-bottom" className={Styles.icon} />
            创建新项目
          </h3>
        </div>
        <AddForm />
      </div>
    )
  }
}

export default Add
