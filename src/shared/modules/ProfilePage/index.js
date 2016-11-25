import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import UserInfo from './UserInfo'
import Styles from './index.css'

class ProfilePage extends React.Component {
  render() {
    const { user } = this.props
    return (
      <div className={Styles.ProfilePage}>
        <Helmet title="profile" />
        <UserInfo user={user} />
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
