import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

import AllProjects from './AllProjects'
import Public from './Public'
import Private from './Private'
import Styles from './index.css'

const items = {
  all: '所有',
  public: '公开',
  private: '私有',
}

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      activeKey: 'all',
      activeContent: 'all',
    }
  }

  setActiveNav = (activeKey) => () => {
    this.setState({ activeKey })
    this.setState({ activeContent: activeKey })
  }
  getItems = () => Object.keys(items).map(key => (
    <li
      key={key}
      onClick={this.setActiveNav(key)}
      className={this.state.activeKey === key ? Styles.activeNav : ''}
    >
      <a>{items[key]}</a>
    </li>
  ))

  getCountent = (type) => {
    const { projects } = this.props
    const publicProjects = projects ? Object.values(projects).filter(p => p.isPublic === true) : null
    const privateProjects = projects ? Object.values(projects).filter(p => p.isPublic === false) : null
    switch (type) {
      case 'all':
        return <AllProjects projects={projects} />
      case 'public':
        return <Public publicProjects={publicProjects} />
      case 'private':
        return <Private privateProjects={privateProjects} />
      default:
        return <AllProjects projects={projects} />
    }
  }

  render() {
    return (
      <div className={Styles.All}>
        <div className={Styles.nav}>
          <ul className={Styles.navUl}>
            {this.getItems()}
          </ul>
          <Form className={Styles.form} inline>
            <FormControl className={Styles.input} type="text" placeholder="search..." />
            <Button className={Styles.submitBtn} bsStyle="success" bsSize="small" type="submit">
              搜 索
            </Button>
          </Form>
        </div>
        <div className={Styles.content}>
          {this.getCountent(this.state.activeContent)}
        </div>
      </div>
    )
  }
}

export default Projects
