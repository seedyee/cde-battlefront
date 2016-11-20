import React, { Component } from 'react'
import Styles from './index.css'
import ProfileForm from './ProfileForm/index'

import logo from '../../assets/logo.png'

class Profile extends Component {
  render() {
    return (
      <div className={Styles.Profile}>
        <h3>基本信息</h3>
        <div className={Styles.content}>
          <ProfileForm initialValues={this.props.initialValues} />
          <div className={Styles.avatar}>
            <p>用户头像</p>
            <img className={Styles.img} alt="your avatar" src={logo} />
            <a href="javascript:;" className={Styles.file}>上传头像
              <input type="file" name="" id="" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile

