import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router'
import { Button } from 'react-bootstrap'

import Styles from './index.css'
import leapcorn from './leapcorn.png'

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
    const { user } = this.props
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
      <div className={Styles.ProfilePage}>
        <Helmet title="profile" />
        <div className={Styles.userInfo}>
          <Link to="/settings/profile">
            <img alt="your avatar" src={leapcorn} />
          </Link>
          <p className={Styles.userName}>{user.username}</p>
          <p>公司：{user.company}</p>
          <p>地址：{user.companyAddress}</p>
          <p>邮箱：{user.email}</p>
          <p>注册：{user.timestamp}</p>
          <Button bsStyle="default" className={Styles.profileEditBtn} type="button" onClick={this.redirectTo}>账户设置</Button>
        </div>
        <div className={Styles.userContent}>

        </div>
      </div>
    )
  }
}

import { selectCurrentUser } from './selectors'

const mapStateToProps = state => ({
  user: selectCurrentUser(state),
})

export default connect(mapStateToProps)(ProfilePage)
