import React from 'react'
import Helmet from 'react-helmet'
import {
  Nav,
  NavItem,
  Glyphicon,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap'

import withRouter from '../utils/withRouter'
import Total from './Total'
import Creation from './Creation'
import Participation from './Participation'
import Attention from './Attention'
import Collection from './Collection'
import Styles from './index.css'

const pathPrefix = '/project/'

const firstFields = [
  { path: 'total', name: '项目', icon: 'folder-open' },
  { path: 'creation', name: '功能', icon: 'wrench' },
]

const secondFields1 = [
  { path: 'total', name: '所有项目 (1)', icon: 'folder-open' },
  { path: 'creation', name: '我创建的 (1)', icon: 'folder-close' },
  { path: 'participation', name: '我参与的 (1)', icon: 'edit' },
]

const secondFields2 = [
  { path: 'attention', name: '我关注的 (0)', icon: 'eye-open' },
  { path: 'collection', name: '我收藏的 (0)', icon: 'heart' },
]

@withRouter
class ProjectPage extends React.Component {
  constructor() {
    super()
    this.state = {
      activeClass: '/project/total',
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
      case 'total':
        return <Total />
      case 'creation':
        return <Creation />
      case 'participation':
        return <Participation />
      case 'attention':
        return <Attention />
      case 'collection':
        return <Collection />
      default:
        return <Total />
    }
  }

  firstSidebarItems = () => (
    <Nav bsStyle="pills" className={Styles.navBottom} stacked onSelect={this.onSelected}>
      {Object.values(firstFields).map(i => (
        <NavItem>{this.getIcon(i.icon)}<strong>{i.name}</strong></NavItem>
      ))}
    </Nav>
  )

  secondSidebarItems = () => (
    <div className={Styles.nav}>
      <Nav bsStyle="pills" className={Styles.navTop} stacked onSelect={this.onSelected}>
        {Object.values(secondFields1).map(i => (
          <NavItem
            className={this.state.activeClass === `${pathPrefix}${i.path}` ? Styles.activeNav : ''}
            eventKey={`${pathPrefix}${i.path}`}
          >
            {this.getIcon(i.icon)}{i.name}
          </NavItem>
        ))}
      </Nav>
      <Nav bsStyle="pills" className={Styles.navBottom} stacked onSelect={this.onSelected}>
        {Object.values(secondFields2).map(i => (
          <NavItem
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
    <Tooltip id="tooltip"><strong>添加项目</strong></Tooltip>
  )

  render() {
    return (
      <div className={Styles.ProjectPage}>
        <Helmet title="project" />
        <div className={Styles.firstSidebar}>
          {this.firstSidebarItems()}
        </div>
        <div className={Styles.SecondSidebar}>
          <h3>项目
            <OverlayTrigger placement="bottom" overlay={this.tooltip()}>
              {this.getIcon('plus')}
            </OverlayTrigger>
          </h3>
          {this.secondSidebarItems()}
        </div>
        <div className={Styles.content}>
          {this.getContent()}
        </div>
      </div>
    )
  }
}

export default ProjectPage
