import React, { Component } from 'react'

import ProfileForm from './ProfileForm'
import Styles from './index.css'
import logo from '../../assets/logo.png'

class Profile extends Component {
  render() {
    return (
      <div className={Styles.Profile}>
        <h3>基本信息</h3>
        <div className={Styles.content}>
          <ProfileForm initialValues={this.props.initialValues} />
          <div className={Styles.avatar}>
            <p className={Styles.avatarTitle}>用户头像</p>
            <img className={Styles.avatarImg} alt="your avatar" src={logo} />
            <a href="javascript:;" className={Styles.uploadFile}>上传头像
              <input className={Styles.avatarInput} type="file" name="" id="" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile

