import React, { Component } from 'react'
import { Glyphicon, Form, FormControl, Button } from 'react-bootstrap'

import Styles from './index.css'

class Creation extends Component {
  render() {
    return (
      <div className={Styles.Creation}>
        <div className={Styles.titleBar}>
          <h3 className={Styles.title}>
            <Glyphicon glyph="leaf" className={Styles.icon} />
            我创建的
          </h3>
          <Form className={Styles.form} inline>
            <FormControl className={Styles.input} type="text" placeholder="search..." />
            <Button className={Styles.submitBtn} bsStyle="success" bsSize="small" type="submit">搜 索</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Creation
