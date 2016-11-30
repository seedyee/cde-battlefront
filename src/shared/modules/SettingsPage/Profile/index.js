import React, { Component } from 'react'

import BasicForm from './BasicForm'
import Styles from './index.css'

import Avatar from './AvatarForm'

class Profile extends Component {
  render() {
    return (
      <div className={Styles.Profile}>
        <h3>基本信息</h3>
        <div className={Styles.content}>
          <BasicForm initialValues={this.props.initialValues} />
          <Avatar />
        </div>
      </div>
    )
  }
}

export default Profile

