import React from 'react'
import { connect } from 'react-redux'

import Helmet from 'react-helmet'
import Profile from './Profile'
import Emails from './Emails'
import Account from './Account'
import Mobiles from './Mobiles'
import Security from './Security'

import { Link } from 'react-router'
import Styles from './index.css'

const pathPrefix = '/settings/'
const fields = {
  Profile: '基本信息',
  Account: '账户',
  Emails: '邮箱',
  Mobiles: '手机',
  Security: '安全',
}

const find = (arr, predcateField, prop) => {
  const obj = arr.filter(i => i[predcateField])[0] || {}
  return obj[prop]
}

class SettingsPage extends React.Component {

  constructor() {
    super()
    this.state = {
      activeKey: '',
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
    const user = this.props.user
    const { basicInformation, emails = [], mobiles = [] } = user
    const initialProfile = {
      ...basicInformation,
      email: find(emails, 'isPublic', 'email'),
      mobile: find(mobiles, 'isPublic', 'mobile'),
    }
    switch (this.props.params.name) {
      case 'Profile':
        return <Profile initialValues={initialProfile} />
      case 'Emails':
        return <Emails user={emails} />
      case 'Account':
        return <Account initialValues={basicInformation} />
      case 'Mobiles':
        return <Mobiles user={mobiles} />
      case 'Security':
        return <Security user={user} />
      default:
        return <Profile initialValues={initialProfile} />
    }
  }
  render() {
    return (
      <div className={Styles.Settings}>
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

