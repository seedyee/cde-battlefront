import React, { Component } from 'react'
import Styles from './index.css'
import ProfileForm from './ProfileForm/index'

class Profile extends Component {
  render() {
    return (
      <div className={Styles.Profile}>
        <h3>基本信息</h3>
        <ProfileForm initialValues={this.props.initialValues} />
      </div>
    )
  }
}

export default Profile

