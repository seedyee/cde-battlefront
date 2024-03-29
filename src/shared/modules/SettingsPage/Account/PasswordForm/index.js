import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import FormInputField from '../../../FormInputField'
import Styles from './index.css'

class PasswordForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit} className={Styles.PasswordForm}>
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="password"
          name="password"
          id="password"
          labelFor="password"
          label="原密码"
        />
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="password"
          name="password1"
          id="password1"
          labelFor="password1"
          label="新密码"
        />
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="password"
          name="password2"
          id="password2"
          labelFor="password2"
          label="确认密码"
        />
        <Button
          type="submit"
          bsStyle="success"
          className={Styles.submitBtn}
          disabled={pristine || submitting}
        >
          更新密码
        </Button>
      </form>
    )
  }
}

PasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import { updatePasswordActions } from '../../actions'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import validate from './validate'

const comp = reduxForm({
  form: 'passwordForm',
  validate: validate(),
  onSubmit: onSubmitActions(updatePasswordActions),
})(PasswordForm)

export default connect()(comp)
