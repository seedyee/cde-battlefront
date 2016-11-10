import React from 'react'

import Helmet from 'react-helmet'
import Styles from './profilePage.css'
import leapcorn from './leapcorn.png'

import { Link, Redirect } from 'react-router'
import { Button } from 'react-bootstrap'

class ProfilePage extends React.Component {
  constructor() {
    super()
    this.state = {
      redirectTo: null,
    }
  }

  redirectTo = () => {
    this.setState({ redirectTo: '/settings/profile' })
  }

  render() {
    const { redirectTo } = this.state
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
      <div className={Styles.ProfilePage}>
        <Helmet title="profile" />
        <div className={Styles.userInfo}>
          <Link to="/settings/profile">
            <img alt="your avatar" src={leapcorn} />
          </Link>
          <p className={Styles.userName}>Seedyee</p>
          <p>公司：跃考恩信息科技</p>
          <p>地址：深圳</p>
          <p>邮箱：666666@seedyee.com</p>
          <p>注册：2016-11-11</p>
          <Button bsStyle="default" className={Styles.profileEditBtn} type="button" onClick={this.redirectTo}>账户设置</Button>
        </div>
        <div className={Styles.userContent}>
          fdsfds
        </div>
      </div>
    )
  }
}

export default ProfilePage
