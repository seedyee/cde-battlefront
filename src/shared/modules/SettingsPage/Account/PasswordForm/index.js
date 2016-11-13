import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Styles from './index.css'
import FormInputField from '../../../FormInputField'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
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

PasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import { updatePasswordActions } from '../../actions'

const comp = reduxForm({
  form: 'passwordForm',
  onSubmit: onSubmitActions(updatePasswordActions),
})(PasswordForm)

const initialValues = {}

const mapStateToProps = () => ({
  initialValues,
})

export default connect(mapStateToProps)(comp)

