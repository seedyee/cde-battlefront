import React from 'react'
import { connect } from 'react-redux'

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
    const user = this.props.user
    const { basicInformation, emails = [] } = user
    const publicEmail = emails.find(email => email.isPublic === 1)
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
      <div className={Styles.ProfilePage}>
        <Helmet title="profile" />
        <div className={Styles.userInfo}>
          <Link to="/settings/profile">
            <img alt="your avatar" src={leapcorn} />
          </Link>
          <p className={Styles.userName}>{basicInformation.username}</p>
          <p>公司：{basicInformation.company}</p>
          <p>地址：{basicInformation.companyAddress}</p>
          <p>邮箱：{publicEmail.email}</p>
          <p>注册：{basicInformation.timestamp}</p>
          <Button bsStyle="default" className={Styles.profileEditBtn} type="button" onClick={this.redirectTo}>账户设置</Button>
        </div>
        <div className={Styles.userContent}>
        userContent
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
