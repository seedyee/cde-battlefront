import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Glyphicon } from 'react-bootstrap'

import Styles from './index.css'

class AllProjects extends Component {
  constructor() {
    super()
    this.state = {
      redirectTo: null,
    }
  }

  redirectTo = () => {
    this.setState({ redirectTo: '/project/basic' })
    this.props.actions.loadProfile()
  }

  render() {
    const { redirectTo } = this.state
    if (redirectTo) return <Redirect to={redirectTo} />
    const { projects } = this.props
    return (
      <div className={Styles.project}>
        {projects && Object.values(projects).map(p =>
          <div key={p.id}>
            <div className={Styles.projectImg}>
              <button onClick={this.redirectTo}>&nbsp;</button>
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

export default AllProjects
