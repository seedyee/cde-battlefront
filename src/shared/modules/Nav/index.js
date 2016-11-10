import React from 'react'
import { connect } from 'react-redux'
import Styles from './index.css'
import { logoutActions } from '../Auth/actions'
import { selectLogined } from '../Auth/selectors'
import { Link, propTypes } from 'react-router'
import logo from './logo.png'

import { NavDropdown, MenuItem } from 'react-bootstrap'

const paths = ['/login', '/register']
const contains = (pathname) => paths.some(path => pathname.startsWith(path))

class Nav extends React.Component {
  static contextTypes = {
    router: propTypes.routerContext.isRequired,
  }

  onSelected = (eventKey) => {
    const { router } = this.context
    router.transitionTo(eventKey)
  }

  getDropdown = () => {
    const { logined, logoutRequest } = this.props
    /* if (!logined) return null*/
    return (
      <NavDropdown onSelect={this.onSelected} title="user" id="user">
        <MenuItem eventKey="/">profile</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="/settings/profile">settings</MenuItem>
        <MenuItem>
          {logined ? <p onClick={() => logoutRequest()}> Logout </p> : ''}
        </MenuItem>
      </NavDropdown>
    )
  }

  render() {
    const { logined, location: { pathname } } = this.props
    if (contains(pathname)) return (<span style={{ display: 'none' }}>noop</span>)
    return (
      <div className={Styles.nav}>
        <div className={Styles.content}>
          <ul className={Styles.pagesNav}>
            <li><Link className={Styles.home} to="/"><img alt="site logo" src={logo} /></Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
          <ul className={Styles.signsNav}>
            {logined ? '' : <li className={Styles.signIn}><Link to="/signIn">Sign in</Link></li>}
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

const mapStateToProps = (state) => ({
  logined: selectLogined(state),
})

export default connect(mapStateToProps, { logoutRequest: logoutActions.request })(Nav)

