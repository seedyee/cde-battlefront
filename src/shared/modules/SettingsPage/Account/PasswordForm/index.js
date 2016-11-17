import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Styles from './index.css'
import FormInputField from '../../../FormInputField'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import { Button } from 'react-bootstrap'

class PasswordForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit} className={Styles.PasswordForm}>
        <Field
          styles={{ input: Styles.input }}
          name="password"
          type="text"
          id="password"
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
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>更新密码</Button>
      </form>
    )
  }
}

PasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import validate from './validate'
import { updatePasswordActions } from '../../actions'

const comp = reduxForm({
  form: 'passwordForm',
  validate: validate(),
  onSubmit: onSubmitActions(updatePasswordActions),
})(PasswordForm)

const initialValues = {}

const mapStateToProps = () => ({
  initialValues,
})

export default connect(mapStateToProps)(comp)

