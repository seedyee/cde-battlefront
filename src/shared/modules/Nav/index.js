import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'

import withRouter from '../utils/withRouter'
import Styles from './index.css'
import logo from '../assets/cde.gif'

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
        <MenuItem eventKey="/profile">我的主页</MenuItem>
        <MenuItem eventKey="/project/all">项目管理</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="/settings/profile">个人设置</MenuItem>
        {logined ? <MenuItem eventKey="/" onClick={() => logoutRequest({ id: user.id })}> 退 出 </MenuItem> : ''}
      </NavDropdown>
    )
  }

  getIcon = (name) => <Glyphicon glyph={name} className={Styles.icon} />

  render() {
    const { logined, location: { pathname } } = this.props
    if (contains(pathname)) return (<span style={{ display: 'none' }}>noop</span>)
    return (
      <div>
        {logined ?
          <div className={Styles.loginedNav}>
            <div className={pathname.indexOf('project') > 0 ? Styles.projectContent : Styles.content}>
              <ul className={Styles.pagesNav}>
                <li>
                  <Link className={Styles.home} to="/">
                    <img alt="site logo" src={logo} />
                  </Link>
                </li>
              </ul>
              {this.getDropdown()}
            </div>
          </div> :
            <div className={Styles.nav}>
              <div className={Styles.content}>
                <ul className={Styles.pagesNav}>
                  <li>
                    <Link className={Styles.home} to="/">
                      <img alt="site logo" src={logo} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">服务</Link>
                  </li>
                  <li>
                    <Link to="/">项目</Link>
                  </li>
                  <li>
                    <Link to="/">组件</Link>
                  </li>
                  <li>
                    <Link to="/">发现</Link>
                  </li>
                </ul>
                <ul className={Styles.signsNav}>
                  <li className={Styles.signIn}>
                    <Link to="/signIn">
                      {this.getIcon('log-in')}&nbsp;登录
                    </Link>
                  </li>
                  <li className={Styles.signIn}>
                    <Link to="/signUp">
                      {this.getIcon('user')}&nbsp;注册
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
        }
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

