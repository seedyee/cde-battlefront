import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import Styles from './index.css'
import FormInputField from '../../FormInputField'
import { Button } from 'react-bootstrap'

class Emails extends Component {
  constructor() {
    super()
    this.state = {
      redirectTo: null,
    }
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className={Styles.Emails}>
        <h3>查看邮箱</h3>
        <div className={Styles.emailTable}>
          <table>
            <thead>
              <tr>
                <th>邮箱</th>
                <th>状态</th>
                <th>标识</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={Styles.addEmail}>
          <form onSubmit={handleSubmit}>
            <Field
              styles={{ input: Styles.input }}
              name="email"
              type="text"
              id="email"
              component={FormInputField}
              label="邮箱地址"
            />
            <Button bsStyle="default" className={Styles.submitBtn} type="submit">添加邮箱</Button>
          </form>
        </div>
      </div>

    )
  }

}

export default reduxForm(

)(Emails)

