import React from 'react'
import Helmet from 'react-helmet'
import Profile from './Profile'
import { Link } from 'react-router'
import Styles from './settingsPage.css'


class SettingsPage extends React.Component {
  render() {
    return (
      <div className={Styles.SettingsPage}>
        <Helmet title="settings" />
        <div className={Styles.sidebar}>
          <ul>
            <li> Personal settings </li>
            <li> <Link to="/settings/profile">Profile</Link> </li>
            <li> <Link to="/settings/emails">Emails</Link> </li>
            <li> <Link to="/settings/account">Account</Link> </li>
          </ul>
        </div>
        <div className={Styles.content}>
          <Profile />
        </div>
      </div>
    )
  }
}

export default SettingsPage
