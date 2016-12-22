import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'

import Styles from './index.css'

class Private extends Component {
  render() {
    const { privateProjects } = this.props
    return (
      <div className={Styles.project}>
        {privateProjects && Object.values(privateProjects).map(p =>
          <div key={p.id}>
            <div className={Styles.projectImg}>
              <a href=""></a>
            </div>
            <p className={Styles.projectName}>
              <Glyphicon glyph="lock" className={Styles.icon} />
              { p.projectName }
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Private
