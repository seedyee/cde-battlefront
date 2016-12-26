import React from 'react'
import { Link } from 'react-router'
import { Label } from 'react-bootstrap'

import Styles from './index.css'

class Basic extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className={Styles.Basic}>
        <div className={Styles.basicInfo}>
          <h3>React-router</h3>
          <Label bsStyle="default" className={Styles.label}>公开</Label>
          <p>React Router 一个针对React而设计的路由解决方案、可以友好的帮你解决React components 到URl之间的同步映射关系</p>
          <div className={Styles.linkDiv}>
            <Link to="/" className={Styles.link}>更新项目信息</Link>
          </div>
        </div>
        <div className={Styles.members}>
          <h3>项目成员 :</h3>
          <ul className={Styles.membersUl}>
            <li>陈先生</li>
            <li>罗先生</li>
            <li>李先生</li>
            <li>廖先生</li>
          </ul>
          <div className={Styles.linkDiv}>
            <Link to="/" className={Styles.link}>更新项目成员</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Basic
