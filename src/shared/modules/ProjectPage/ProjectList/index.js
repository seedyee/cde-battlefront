import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

import AllProjects from './AllProjects'
import PublicProjects from './PublicProjects'
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
    const { data, actions } = this.props
    const publicProjects = data ? Object.values(data).filter(p => p.isPublic === true) : null
    const privateProjects = data ? Object.values(data).filter(p => p.isPublic === false) : null
    switch (type) {
      case 'all':
        return <AllProjects projects={data} actions={actions} />
      case 'public':
        return <PublicProjects publicProjects={publicProjects} actions={actions} />
      case 'private':
        return <Private privateProjects={privateProjects} actions={actions} />
      default:
        return <AllProjects projects={data} actions={actions} />
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
