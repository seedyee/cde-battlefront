import React, { Component } from 'react'
import { Glyphicon, Form, FormControl, Button } from 'react-bootstrap'

import Styles from './index.css'

const items = {
  all: '所有',
  public: '公开',
  private: '私有',
}

const AllProject = () => (
  <div className={Styles.project}>
    <div>
      <div className={Styles.projectImg}>
        <a href=""></a>
      </div>
      <p className={Styles.projectName}>
        <Glyphicon glyph="lock" className={Styles.icon} />
        my project
      </p>
    </div>
    <div>
      <div className={Styles.projectImg}>
        <a href=""></a>
      </div>
      <p className={Styles.projectName}>
        <Glyphicon glyph="lock" className={Styles.icon} />
        my project
      </p>
    </div>
    <div>
      <div className={Styles.projectImg}>
        <a href=""></a>
      </div>
      <p className={Styles.projectName}>
        <Glyphicon glyph="lock" className={Styles.icon} />
        my project
      </p>
    </div>
  </div>
)
const Public = () => (
  <div>Public</div>
)
const Private = () => (
  <div>Private</div>
)

class All extends Component {
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
    <li key={key} onClick={this.setActiveNav(key)} className={this.state.activeKey === key ? Styles.activeNav : ''}>
      <a>{items[key]}</a>
    </li>
  ))

  getCountent = (type) => {
    switch (type) {
      case 'all':
        return <AllProject />
      case 'public':
        return <Public />
      case 'private':
        return <Private />
      default:
        return <AllProject />
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
            <Button className={Styles.submitBtn} bsStyle="success" bsSize="small" type="submit">搜 索</Button>
          </Form>
        </div>
        <div className={Styles.content}>
          {this.getCountent(this.state.activeContent)}
        </div>
      </div>
    )
  }
}

export default All
