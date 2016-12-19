import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import UserInfo from './UserInfo'
import Styles from './index.css'

const items = {
  home: '主页',
  project: '项目',
  attention: '关注',
  collection: '收藏',
}

const Home = () => (
  <div className={Styles.project}>
    Home
  </div>
)
const Project = () => (
  <div>Project</div>
)
const Attention = () => (
  <div>Attention</div>
)
const Collection = () => (
  <div>Collection</div>
)

class ProfilePage extends React.Component {
  constructor() {
    super()
    this.state = {
      activeKey: 'home',
      activeContent: 'home',
    }
  }

  setActiveNav = (activeKey) => () => {
    this.setState({ activeKey })
    this.setState({ activeContent: activeKey })
  }

  getItems = () => Object.keys(items).map(key => (
    <li
      key={key}
      onClick={this.setActiveNav(key)}
      className={this.state.activeKey === key ? Styles.activeNav : ''}
    >
      <a>{items[key]}</a>
    </li>
  ))

  getCountent = (type) => {
    switch (type) {
      case 'home':
        return <Home />
      case 'project':
        return <Project />
      case 'attention':
        return <Attention />
      case 'collection':
        return <Collection />
      default:
        return <Home />
    }
  }

  render() {
    const { user } = this.props
    return (
      <div className={Styles.ProfilePage}>
        <Helmet title="profile" />
        <UserInfo user={user} />
        <div className={Styles.userContent}>
          <div className={Styles.nav}>
            <ul className={Styles.navUl}>
              {this.getItems()}
            </ul>
          </div>
          <div className={Styles.content}>
            {this.getCountent(this.state.activeContent)}
          </div>
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
