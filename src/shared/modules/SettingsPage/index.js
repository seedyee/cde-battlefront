import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Profile from './Profile'
import Emails from './Emails'
import Account from './Account'
import Mobiles from './Mobiles'
import Security from './Security'
import Styles from './index.css'

const pathPrefix = '/settings/'

const fields = {
  Profile: '基本信息',
  Account: '账户信息',
  Emails: '邮箱信息',
  Mobiles: '手机信息',
  Security: '安全信息',
}

class SettingsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      activeKey: 'Profile',
    }
  }

  setActiveNav = (activeKey) => () => {
    this.setState({ activeKey })
  }

  getSidebarItems = () => Object.keys(fields).map(key => (
    <li key={key} onClick={this.setActiveNav(key)} className={this.state.activeKey === key ? Styles.activeNav : ''}>
      <Link to={`${pathPrefix}${key}`}>{fields[key]}</Link>
    </li>
  ))

  getCountent = () => {
    const { user, emails, mobiles } = this.props
    switch (this.props.params.name) {
      case 'Profile':
        return <Profile initialValues={user} />
      case 'Emails':
        return <Emails emails={emails} user={user} />
      case 'Account':
        return <Account initialValues={user} />
      case 'Mobiles':
        return <Mobiles mobiles={mobiles} user={user} />
      case 'Security':
        return <Security user={user} />
      default:
        return <Profile initialValues={user} />
    }
  }
  render() {
    return (
      <div className={Styles.Settings}>
        <Helmet title="settings" />
        <div className={Styles.sidebar}>
          <ul className={Styles.sidebarUl}>
            <li>个人设置</li>
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

import { selectUser, selectEmails, selectMobiles } from './selectors'

const mapStateToProps = state => ({
  user: selectUser(state),
  emails: selectEmails(state),
  mobiles: selectMobiles(state),
})

export default connect(mapStateToProps)(SettingsPage)

