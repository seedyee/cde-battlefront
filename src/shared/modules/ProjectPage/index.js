import React from 'react'
import Helmet from 'react-helmet'
import { Link, Match } from 'react-router'
import { connect } from 'react-redux'
import {
  Nav,
  NavItem,
  Glyphicon,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap'

import withRouter from '../utils/withRouter'
import Add from './Add'
import Projects from './Projects'
import Styles from './index.css'

const pathPrefix = '/project'

const firstFields = [
  { activeKey: 'project', path: '/all', name: '项目', icon: 'folder-open' },
  { activeKey: 'component', path: '/create', name: '组件', icon: 'wrench' },
]

const secondFields = [
  { name: '所有项目', path: '/all', icon: 'folder-open' },
  { name: '我创建的', path: '/create', icon: 'folder-close' },
  { name: '我参与的', path: '/participate', icon: 'edit' },
  { name: '我关注的', path: '/concern', icon: 'eye-open' },
  { name: '我收藏的', path: '/collect', icon: 'heart' },
]

@withRouter
class ProjectPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeClass: this.props.pathname,
    }
  }

  onSelected = (eventKey) => {
    this.push(eventKey)
    this.setState({ activeClass: eventKey })
  }

  getIcon = (name) => (
    <Glyphicon glyph={name} className={Styles.icon} />
  )

  tooltip = () => (
    <Tooltip id="tooltip"><strong className={Styles.tooltip}>点击创建项目</strong></Tooltip>
  )

  firstSidebarItems = () => (
    <Nav bsStyle="pills" className={Styles.navBottom} stacked onSelect={this.onSelected}>
      {Object.values(firstFields).map(i => (
        <NavItem
          key={i.activeKey}
          eventKey={`${pathPrefix}${i.path}`}
          className={this.props.pathname.indexOf(i.activeKey) > 0 ? Styles.activeFirstNav : ''}
        >
          {this.getIcon(i.icon)}
          <strong>{i.name}</strong>
        </NavItem>
      ))}
    </Nav>
  )

  secondSidebarItems = () => (
    <div className={Styles.nav}>
      <Nav bsStyle="pills" onSelect={this.onSelected}>
        {Object.values(secondFields).map(i => (
          <NavItem
            key={i.path}
            eventKey={`${pathPrefix}${i.path}`}
            className={this.state.activeClass === `${pathPrefix}${i.path}` ? Styles.activeNav : ''}
          >
            {this.getIcon(i.icon)}{i.name}
          </NavItem>
        ))}
      </Nav>
    </div>
  )

  routes = () => {
    const { all, created, joined, watched, collect } = this.props
    return ([
      { pattern: `${pathPrefix}/add`, component: Add },
      { pattern: `${pathPrefix}/all`, component: Projects, projects: all },
      { pattern: `${pathPrefix}/create`, component: Projects, projects: created },
      { pattern: `${pathPrefix}/participate`, component: Projects, projects: joined },
      { pattern: `${pathPrefix}/concern`, component: Projects, projects: watched },
      { pattern: `${pathPrefix}/collect`, component: Projects, projects: collect },
    ])
  }

  MatchWithSubRoutes = (route) => (
    <Match
      {...route}
      render={() => (
        <route.component projects={route.projects} />
      )}
    />
  )

  render() {
    return (
      <div className={Styles.ProjectPage}>
        <Helmet title="project" />
        <div className={Styles.firstSidebar}>
          {this.firstSidebarItems()}
        </div>
        <div className={Styles.content}>
          <div className={Styles.SecondSidebar}>
            <OverlayTrigger placement="bottom" overlay={this.tooltip()}>
              <h3
                onClick={() => this.setState({ activeClass: `${pathPrefix}/add` })}
                className={this.state.activeClass === `${pathPrefix}/add` ? Styles.activeAdd : ''}
              >
                <Link to={`${pathPrefix}/add`} className={Styles.add}>
                  {this.getIcon('plus')}新建项目
                </Link>
              </h3>
            </OverlayTrigger>
            {this.secondSidebarItems()}
          </div>
          {Object.values(this.routes()).map((route, i) => (
            <this.MatchWithSubRoutes key={i} {...route} />
          ))}
        </div>
      </div>
    )
  }
}

import {
  selectAll,
  selectCreated,
  selectJoined,
  selectWatched,
  selectCollect,
} from './selectors'

const mapStateToProps = state => ({
  all: selectAll(state),
  created: selectCreated(state),
  joined: selectJoined(state),
  watched: selectWatched(state),
  collect: selectCollect(state),
})

export default connect(mapStateToProps)(ProjectPage)
