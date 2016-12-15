import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import {
  Nav,
  NavItem,
  Glyphicon,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap'

import withRouter from '../utils/withRouter'
import Add from './Add'
import All from './All'
import Creation from './Creation'
import Participation from './Participation'
import Concern from './Concern'
import Collection from './Collection'
import Styles from './index.css'

const pathPrefix = '/project/'

const firstFields = [
  { activeKey: 'project', path: 'all', name: '项目', icon: 'folder-open' },
  { activeKey: 'component', path: 'create', name: '组件', icon: 'wrench' },
]

const secondFields1 = [
  { path: 'all', name: '所有项目 (1)', icon: 'folder-open' },
  { path: 'create', name: '我创建的 (1)', icon: 'folder-close' },
  { path: 'participate', name: '我参与的 (1)', icon: 'edit' },
]

const secondFields2 = [
  { path: 'concern', name: '我关注的 (0)', icon: 'eye-open' },
  { path: 'collect', name: '我收藏的 (0)', icon: 'heart' },
]

@withRouter
class ProjectPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeClass: this.props.location.pathname,
    }
  }

  onSelected = (eventKey) => {
    this.push(eventKey)
    this.setState({ activeClass: eventKey })
  }

  getIcon = (name) => (
    <Glyphicon glyph={name} className={Styles.icon} />
  )

  getContent = () => {
    switch (this.props.params.name) {
      case 'add':
        return <Add />
      case 'all':
        return <All />
      case 'create':
        return <Creation />
      case 'participate':
        return <Participation />
      case 'concern':
        return <Concern />
      case 'collect':
        return <Collection />
      default:
        return <All />
    }
  }

  firstSidebarItems = () => (
    <Nav bsStyle="pills" className={Styles.navBottom} stacked onSelect={this.onSelected}>
      {Object.values(firstFields).map(i => (
        <NavItem
          key={i.activeKey}
          className={this.props.location.pathname.indexOf(i.activeKey) > 0 ? Styles.activeFirstNav : ''}
          eventKey={`${pathPrefix}${i.path}`}
        >
          {this.getIcon(i.icon)}
          <strong>{i.name}</strong>
        </NavItem>
      ))}
    </Nav>
  )

  secondSidebarItems = () => (
    <div className={Styles.nav}>
      <Nav bsStyle="pills" className={Styles.navTop} onSelect={this.onSelected}>
        {Object.values(secondFields1).map(i => (
          <NavItem
            key={i.path}
            className={this.state.activeClass === `${pathPrefix}${i.path}` ? Styles.activeNav : ''}
            eventKey={`${pathPrefix}${i.path}`}
          >
            {this.getIcon(i.icon)}{i.name}
          </NavItem>
        ))}
      </Nav>
      <Nav bsStyle="pills" onSelect={this.onSelected}>
        {Object.values(secondFields2).map(i => (
          <NavItem
            key={i.path}
            className={this.state.activeClass === `${pathPrefix}${i.path}` ? Styles.activeNav : ''}
            eventKey={`${pathPrefix}${i.path}`}
          >
            {this.getIcon(i.icon)}{i.name}
          </NavItem>
        ))}
      </Nav>
    </div>
  )

  tooltip = () => (
    <Tooltip id="tooltip"><strong className={Styles.tooltip}>点击创建项目</strong></Tooltip>
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
              <h3 onClick={() => this.setState({ activeClass: '/project/add' })}>
                <Link to="/project/add" className={Styles.add}>{this.getIcon('plus')}新建项目</Link>
              </h3>
            </OverlayTrigger>
            {this.secondSidebarItems()}
          </div>
          {this.getContent()}
        </div>
      </div>
    )
  }
}

export default ProjectPage
