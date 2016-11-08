import React from 'react'
import { connect } from 'react-redux'
import Styles from './Nav.css'
import { logoutActions } from '../Auth/actions'
import { selectLogined } from '../Auth/selectors'
import { Link } from 'react-router'

import { NavDropdown, MenuItem } from 'react-bootstrap'

const getDropdown = ({ logined, logoutRequest }) => {
  if (!logined) return null
  return (
    <NavDropdown eventKey={3} title="user" id="user">
      <MenuItem eventKey={3.1}><Link to="/">profile</Link></MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.2}><Link to="/settings/profile">settings</Link></MenuItem>
      <MenuItem eventKey={3.3}>
        {logined ? <li onClick={() => logoutRequest()}>Logout</li> : ''}
      </MenuItem>
    </NavDropdown>
  )
}

const paths = ['/login', '/register']
const contains = (pathname) => paths.some(path => pathname.startsWith(path))
const Nav = ({ logoutRequest, logined, location: { pathname } }) => {
  if (contains(pathname)) return (<span style={{ display: 'none' }}>noop</span>)
  return (
    <div className={Styles.Nav}>
      <div className={Styles.content}>
        <ul className={Styles.pagesNav}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <ul className={Styles.signsNav}>
          {logined ? '' : <li className={Styles.signIn}><Link to="/login">Sign in</Link></li> }
          {getDropdown({ logined, logoutRequest })}
          {getDropdown({ logined: true, logoutRequest })}
        </ul>
      </div>
    </div>
  )
}

Nav.propTypes = {
  logoutRequest: React.PropTypes.func,
  logined: React.PropTypes.bool,
}

const mapStateToProps = (state) => ({
  logined: selectLogined(state),
})

export default connect(mapStateToProps, { logoutRequest: logoutActions.request })(Nav)

