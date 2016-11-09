import React from 'react'

import Helmet from 'react-helmet'
import Profile from './Profile'
import Emails from './Emails'
import Account from './Account'
import Phone from './Phone'
import Security from './Security'

import { Link } from 'react-router'
import Styles from './settingsPage.css'

const pathPrefix = '/settings/'
const fields = {
  Profile: '基本信息',
  Account: '账户',
  Emails: '邮箱',
  Phone: '手机',
  Security: '安全',
}

class SettingsPage extends React.Component {
  getSidebarItems = () => Object.keys(fields).map(key => (
    <li key={key}> <Link to={`${pathPrefix}${key}`}>{fields[key]}</Link> </li>
  ))
  getCountent = () => {
    switch (this.props.params.name) {
      case 'Profile':
        return <Profile />
      case 'Emails':
        return <Emails />
      case 'Account':
        return <Account />
      case 'Phone':
        return <Phone />
      case 'Security':
        return <Security />
      default:
        return <Profile />
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

export default SettingsPage
