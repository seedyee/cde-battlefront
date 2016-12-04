import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'

import withRouter from '../utils/withRouter'
import Styles from './index.css'
import logo from './logo.png'

const paths = ['/login', '/register']
const contains = (pathname) => paths.some(path => pathname.startsWith(path))

@withRouter
class Nav extends React.Component {
  onSelected = (eventKey) => {
    this.push(eventKey)
  }

  getDropdown = () => {
    const { user, logined, logoutRequest } = this.props
    return (
      <NavDropdown className={Styles.navItems} pullRight onSelect={this.onSelected} title={this.getIcon('user')} id="user">
        <MenuItem eventKey="/project/total">项 目</MenuItem>
        <MenuItem eventKey="/profile">基本信息</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="/settings/profile">设 置</MenuItem>
        {logined ? <MenuItem eventKey="/" onClick={() => logoutRequest(user.id)}> 注 销 </MenuItem> : ''}
      </NavDropdown>
    )
  }

  getIcon = (name) => <Glyphicon glyph={name} className={Styles.icon} />

  render() {
    const { logined, location: { pathname } } = this.props
    if (contains(pathname)) return (<span style={{ display: 'none' }}>noop</span>)
    return (
      <div className={Styles.nav}>
        <div className={Styles.content}>
          <ul className={Styles.pagesNav}>
            <li>
              {logined ? this.getIcon('align-left') : <Link className={Styles.home} to="/"><img className={Styles.logo} alt="site logo" src={logo} /></Link>}
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <ul className={Styles.signsNav}>
            <li className={Styles.signIn}><Link to="/signIn">{this.getIcon('log-in')}&nbsp;登录</Link></li>
            <li className={Styles.signIn}><Link to="/signUp">{this.getIcon('user')}&nbsp;注册</Link></li>
            {this.getDropdown()}
          </ul>
        </div>
      </div>
    )
  }
}

Nav.propTypes = {
  logoutRequest: React.PropTypes.func,
  logined: React.PropTypes.bool,
}

import { logoutActions } from '../Auth/actions'
import { selectLogined, selectUser } from '../Auth/selectors'

const mapStateToProps = (state) => ({
  user: selectUser(state),
  logined: selectLogined(state),
})

export default connect(mapStateToProps, { logoutRequest: logoutActions.request })(Nav)

