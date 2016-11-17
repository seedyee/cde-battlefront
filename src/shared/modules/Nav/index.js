import React from 'react'
import { connect } from 'react-redux'
import Styles from './index.css'
import { logoutActions } from '../Auth/actions'
import { selectLogined } from '../Auth/selectors'
import { Link } from 'react-router'
import withRouter from '../utils/withRouter'
import logo from './logo.png'

import { NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'

const paths = ['/login', '/register']
const contains = (pathname) => paths.some(path => pathname.startsWith(path))

@withRouter
class Nav extends React.Component {
  onSelected = (eventKey) => {
    this.push(eventKey)
  }

  getDropdown = () => {
    const { logined, logoutRequest } = this.props
    /* if (!logined) return null*/
    return (
      <NavDropdown className={Styles.navItems} pullRight onSelect={this.onSelected} title={this.getIcon('user')} id="user">
        <MenuItem eventKey="/profile">基本信息</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="/settings/profile">设 置</MenuItem>
        {logined ? <MenuItem eventKey="/" onClick={() => logoutRequest()}> 注 销 </MenuItem> : ''}
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
              <Link className={Styles.home} to="/"><img alt="site logo" src={logo} /></Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <ul className={Styles.signsNav}>
            {logined ? '' : <li className={Styles.signIn}><Link to="/signIn">{this.getIcon('log-in')}&nbsp;登录</Link></li>}
            {logined ? this.getDropdown() : ''}
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

const mapStateToProps = (state) => ({
  logined: selectLogined(state),
})

export default connect(mapStateToProps, { logoutRequest: logoutActions.request })(Nav)

