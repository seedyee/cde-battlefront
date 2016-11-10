import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import Styles from './index.css'
import FormInputField from '../../FormInputField'
import { Button } from 'react-bootstrap'

class Account extends Component {
  constructor() {
    super()
    this.state = {
      redirectTo: null,
    }
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className={Styles.Account}>
        <div className={Styles.userName}>
          <h3>修改用户名</h3>
          <form onSubmit={handleSubmit}>
            <Field
              styles={{ input: Styles.input }}
              name="username"
              type="text"
              id="username"
              component={FormInputField}
            />
            <Button bsStyle="default" className={Styles.submitBtn} type="submit">更新用户名</Button>
          </form>
        </div>
        <div className={Styles.passwordEdit}>
          <h3>修改密码</h3>
          <form onSubmit={handleSubmit}>
            <Field
              styles={{ input: Styles.input }}
              name="oldPassword"
              type="text"
              id="oldPassword"
              component={FormInputField}
              label="当前密码"
            />
            <Field
              styles={{ input: Styles.input }}
              name="newPassword"
              type="text"
              id="newPassword"
              component={FormInputField}
              label="新密码"
            />
            <Field
              styles={{ input: Styles.input }}
              name="newPasswordConfirm"
              type="text"
              id="newPasswordConfirm"
              component={FormInputField}
              label="确认密码"
            />
            <Button bsStyle="default" className={Styles.submitBtn} type="submit">更新密码</Button>
          </form>
        </div>
      </div>

    )
  }

}

export default reduxForm(

)(Account)

