import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import FormInputField from '../../../FormInputField'
import Styles from './index.css'

class ProfileForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit} className={Styles.RegisterForm}>
        <Field
          styles={{ input: Styles.input }}
          name="realName"
          type="text"
          id="realName"
          component={FormInputField}
          label="姓名"
        />
        <Field
          styles={{ input: Styles.input }}
          name="email"
          type="email"
          id="email"
          component={FormInputField}
          label="邮箱"
        />
        <Field
          styles={{ input: Styles.input }}
          name="mobile"
          type="mobile"
          id="mobile"
          component={FormInputField}
          label="手机"
        />
        <Field
          styles={{ input: Styles.input }}
          name="company"
          type="text"
          id="company"
          component={FormInputField}
          label="公司"
        />
        <Field
          styles={{ input: Styles.input }}
          name="companyAddress"
          type="text"
          id="companyAddress"
          component={FormInputField}
          label="公司地址"
        />
        <Field
          styles={{ input: Styles.textarea }}
          name="personal"
          type="text"
          id="personal"
          component={FormInputField}
          label="个人简介"
          textarea="true"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>更&nbsp;&nbsp;新</Button>
      </form>
    )
  }
}

ProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import { updateUserActions } from '../../actions'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import validate from '../../../utils/validate'

const comp = reduxForm({
  form: 'profileForm',
  validate: validate({ register: true }),
  onSubmit: onSubmitActions(updateUserActions),
})(ProfileForm)

export default connect()(comp)

