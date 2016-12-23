import React from 'react'
import Helmet from 'react-helmet'
import { Match } from 'react-router'
import { connect } from 'react-redux'
import { Nav, NavItem, Glyphicon } from 'react-bootstrap'

import withRouter from '../utils/withRouter'
import Add from './Add'
import Basic from './Basic'
import Category from './Category'
import ProjectList from './ProjectList'
import Styles from './index.css'

const pathPrefix = '/project'

const firstFields = [
  { activeKey: 'project', path: '/category/all', name: '项目', icon: 'folder-open' },
  { activeKey: 'component', path: '/create', name: '组件', icon: 'wrench' },
]

@withRouter
class ProjectPage extends React.Component {

  onSelected = (eventKey) => {
    this.push(eventKey)
  }

  getIcon = (name) => (
    <Glyphicon glyph={name} className={Styles.icon} />
  )

  firstSidebarItems = () => (
    <Nav bsStyle="pills" onSelect={this.onSelected} stacked>
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

  routes = () => {
    const { all, created, joined, watched, collect } = this.props
    return ([
      { pattern: `${pathPrefix}/basic`, component: Basic },
      {
        pattern: `${pathPrefix}/category`,
        component: Category,
        routes: [
          { pattern: `${pathPrefix}/category/add`, component: Add },
          { pattern: `${pathPrefix}/category/all`, component: ProjectList, projects: all },
          { pattern: `${pathPrefix}/category/create`, component: ProjectList, projects: created },
          { pattern: `${pathPrefix}/category/participate`, component: ProjectList, projects: joined },
          { pattern: `${pathPrefix}/category/concern`, component: ProjectList, projects: watched },
          { pattern: `${pathPrefix}/category/collect`, component: ProjectList, projects: collect },
        ],
      },
    ])
  }

  MatchWithSubRoutes = (route) => (
    <Match
      {...route}
      render={(props) => (
        <route.component
          {...props}
          projects={route.projects}
          routes={route.routes}
        />
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
        {Object.values(this.routes()).map((route, i) => (
          <this.MatchWithSubRoutes key={i} {...route} />
        ))}
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
