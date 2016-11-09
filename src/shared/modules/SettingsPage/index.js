import React from 'react'
import { connect } from 'react-redux'

import Helmet from 'react-helmet'
import Profile from './Profile'
import Emails from './Emails'
import Account from './Account'
import Mobiles from './Mobiles'
import Security from './Security'

import { Link } from 'react-router'
import Styles from './settingsPage.css'

const pathPrefix = '/settings/'
const fields = {
  Profile: '基本信息',
  Account: '账户',
  Emails: '邮箱',
  Mobiles: '手机',
  Security: '安全',
}
class SettingsPage extends React.Component {
  getSidebarItems = () => Object.keys(fields).map(key => (
    <li key={key}> <Link to={`${pathPrefix}${key}`}>{fields[key]}</Link> </li>
  ))
  getCountent = () => {
    const user = this.props.user
    switch (this.props.params.name) {
      case 'Profile':
        return <Profile user={user} />
      case 'Emails':
        return <Emails user={user.emails} />
      case 'Account':
        return <Account user={user} />
      case 'Mobiles':
        return <Mobiles user={user.mobiles} />
      case 'Security':
        return <Security user={user} />
      default:
        return <Profile user={user} />
    }
  }
  render() {
    return (
      <div className={Styles.SettingsPage}>
        <Helmet title="settings" />
        <div className={Styles.sidebar}>
          <ul>
            <li>个人信息设置</li>
            {this.getSidebarItems()}
          </ul>
        </div>
        <div className={Styles.content}>
          {this.getCountent()}
        </div>
      </div>
    )
  }
}

import { selectUser } from './selectors'
const mapStateToProps = state => ({
  user: selectUser(state),
})

export default connect(mapStateToProps)(SettingsPage)

