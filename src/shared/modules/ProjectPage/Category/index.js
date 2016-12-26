import React from 'react'
import { Link, Match } from 'react-router'
import {
  Nav,
  NavItem,
  Glyphicon,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap'

import withRouter from '../../utils/withRouter'
import Styles from './index.css'

const pathPrefix = '/project/category'

const secondFields = [
  { name: '所有项目', path: '/all', icon: 'folder-open' },
  { name: '我创建的', path: '/create', icon: 'folder-close' },
  { name: '我参与的', path: '/participate', icon: 'edit' },
  { name: '我关注的', path: '/concern', icon: 'eye-open' },
  { name: '我收藏的', path: '/collect', icon: 'heart' },
]

@withRouter
class Projects extends React.Component {

  onSelected = (eventKey) => {
    this.push(eventKey)
  }

  getIcon = (name) => (
    <Glyphicon glyph={name} className={Styles.icon} />
  )

  tooltip = () => (
    <Tooltip id="tooltip"><strong className={Styles.tooltip}>点击创建项目</strong></Tooltip>
  )

  secondSidebarItems = () => (
    <div className={Styles.nav}>
      <Nav bsStyle="pills" onSelect={this.onSelected}>
        {Object.values(secondFields).map(i => (
          <NavItem
            key={i.path}
            eventKey={`${pathPrefix}${i.path}`}
            className={this.props.location.pathname === `${pathPrefix}${i.path}` ? Styles.activeNav : ''}
          >
            {this.getIcon(i.icon)}{i.name}
          </NavItem>
        ))}
      </Nav>
    </div>
  )

  MatchWithSubRoutes = (route) => (
    <Match
      {...route}
      render={() => (
        <route.component data={route.data} actions={route.actions} />
      )}
    />
  )

  render() {
    return (
      <div className={Styles.content}>
        <div className={Styles.SecondSidebar}>
          <OverlayTrigger placement="bottom" overlay={this.tooltip()}>
            <h3 className={this.props.location.pathname === `${pathPrefix}/add` ? Styles.activeAdd : ''}>
              <Link to={`${pathPrefix}/add`} className={Styles.add}>
                {this.getIcon('plus')}新建项目
              </Link>
            </h3>
          </OverlayTrigger>
          {this.secondSidebarItems()}
        </div>
        {this.props.routes.map((route, i) => (
          <this.MatchWithSubRoutes key={i} {...route} />
        ))}
      </div>
    )
  }
}

export default Projects
