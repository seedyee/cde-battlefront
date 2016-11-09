import React from 'react'
import Helmet from 'react-helmet'
import Profile from './Profile'
import Emails from './Emails'
import Account from './Account'
import { Link } from 'react-router'
import Styles from './settingsPage.css'

const pathPrefix = '/settings/'
const fieldNames = ['Profile', 'Emails', 'Account']
class SettingsPage extends React.Component {
  getSidebarItems = () => fieldNames.map(name => (
    <li key={name}> <Link to={`${pathPrefix}${name}`}>{name}</Link> </li>
  ))
  getCountent = () => {
    switch (this.props.params.name) {
      case 'Profile':
        return <Profile />
      case 'Emails':
        return <Emails />
      case 'Account':
        return <Account />
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
            <li> Personal settings </li>
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
