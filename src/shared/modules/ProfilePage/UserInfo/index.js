import React from 'react'
import { Link, Redirect } from 'react-router'
import { Button } from 'react-bootstrap'

import Styles from './index.css'
import leapcorn from '../../assets/leapcorn-blue.png'

class UserInfo extends React.Component {
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
    const { user } = this.props
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
      <div className={Styles.userInfo}>
        <Link to="/settings/profile">
          <img alt="your avatar" src={leapcorn} />
        </Link>
        <p className={Styles.userName}>{user.name}</p>
        <Button bsStyle="default" className={Styles.profileEditBtn} type="button" onClick={this.redirectTo}>账户设置</Button>
        <p>公司：{user.company}</p>
        <p>地址：{user.address}</p>
        <p>邮箱：{user.email}</p>
        <p>注册：{user.timestamp}</p>
      </div>
    )
  }
}

export default UserInfo
