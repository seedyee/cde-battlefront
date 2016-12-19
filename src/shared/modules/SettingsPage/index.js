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
  profile: '基本信息',
  account: '账户信息',
  emails: '邮箱信息',
  mobiles: '手机信息',
  security: '安全信息',
}

class SettingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: this.props.params.name,
    }
  }

  setActiveNav = (activeKey) => () => {
    this.setState({ activeKey })
  }

  getSidebarItems = () => Object.keys(fields).map(key => (
    <li
      key={key}
      onClick={this.setActiveNav(key)}
      className={this.state.activeKey === key ? Styles.activeNav : ''}
    >
      <Link to={`${pathPrefix}${key}`}>{fields[key]}</Link>
    </li>
  ))

  getCountent = () => {
    const { user, emails, mobiles } = this.props
    switch (this.props.params.name) {
      case 'profile':
        return <Profile initialValues={user} />
      case 'emails':
        return <Emails emails={emails} user={user} />
      case 'account':
        return <Account initialValues={{ name: this.props.user.name }} />
      case 'mobiles':
        return <Mobiles mobiles={mobiles} user={user} />
      case 'security':
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

