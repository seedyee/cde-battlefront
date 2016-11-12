import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router'
import Styles from './index.css'
import FormInputField from '../../../FormInputField'
import { Button } from 'react-bootstrap'

class PasswordForm extends Component {
  constructor() {
    super()
    this.state = {
      redirectTo: null,
    }
  }

  redirectTo = () => {
    this.setState({ redirectTo: '/settings/profile' })
  }

  render() {
    const { redirectTo } = this.state
    const { handleSubmit, pristine, submitting } = this.props
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
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
        <Button bsStyle="default" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>更新密码</Button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'passwordForm',
})(PasswordForm)