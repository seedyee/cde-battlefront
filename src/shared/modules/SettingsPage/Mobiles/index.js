import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import Styles from './index.css'
import FormInputField from '../../FormInputField'
import { Button } from 'react-bootstrap'

class Mobiles extends Component {
  constructor() {
    super()
    this.state = {
      redirectTo: null,
    }
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className={Styles.Mobiles}>
        <h3>查看手机</h3>
        <div className={Styles.mobilesTable}>
          <table>
            <thead>
              <tr>
                <th>手机</th>
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
        <div className={Styles.addMobile}>
          <form onSubmit={handleSubmit}>
            <Field
              styles={{ input: Styles.input }}
              name="mobile"
              type="text"
              id="mobile"
              component={FormInputField}
              label="手机号码"
            />
            <Button bsStyle="default" className={Styles.submitBtn} type="submit">添加手机</Button>
          </form>
        </div>
      </div>

    )
  }

}

export default reduxForm(

)(Mobiles)

