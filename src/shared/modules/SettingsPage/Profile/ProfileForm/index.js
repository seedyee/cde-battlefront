import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import FormInputField from '../../../FormInputField'
import FormSelectField from '../../../FormSelectField'
import Styles from './index.css'

class ProfileForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting, emails, mobiles } = this.props
    const emailOptions = []
    const mobileOptions = []
    Object.values(emails).map(e => emailOptions.push(e.email))
    Object.values(mobiles).map(e => mobileOptions.push(e.mobile))
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
          component={FormSelectField}
          label="邮箱"
          options={emailOptions}
        />
        <Field
          styles={{ input: Styles.input }}
          name="mobile"
          type="mobile"
          id="mobile"
          component={FormSelectField}
          label="手机"
          options={mobileOptions}
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
import validate from './validate'

const comp = reduxForm({
  form: 'profileForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  validate: validate({ register: true }),
  onSubmit: onSubmitActions(updateUserActions),
})(ProfileForm)

import { selectEmails, selectMobiles } from '../../selectors'

const mapStateToProps = state => ({
  emails: selectEmails(state),
  mobiles: selectMobiles(state),
})

export default connect(mapStateToProps)(comp)

