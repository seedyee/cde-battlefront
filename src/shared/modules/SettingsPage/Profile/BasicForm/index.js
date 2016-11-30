import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import FormInputField from '../../../FormInputField'
import FormSelectField from '../../../FormSelectField'
import Styles from './index.css'

class BasicForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting, emails, mobiles } = this.props
    const emailOptions = []
    const mobileOptions = []
    emails.map(e => emailOptions.push(e.email))
    mobiles.map(m => mobileOptions.push(m.mobile))
    return (
      <form onSubmit={handleSubmit} className={Styles.RegisterForm}>
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="text"
          name="realName"
          id="realName"
          labelFor="realName"
          label="姓名"
        />
        <Field
          styles={{ input: Styles.input }}
          component={FormSelectField}
          type="email"
          name="email"
          id="email"
          labelFor="email"
          label="邮箱"
          options={emailOptions}
        />
        <Field
          styles={{ input: Styles.input }}
          component={FormSelectField}
          type="mobile"
          name="mobile"
          id="mobile"
          labelFor="mobile"
          label="手机"
          options={mobileOptions}
        />
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="text"
          name="company"
          id="company"
          labelFor="company"
          label="公司"
        />
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="text"
          name="companyAddress"
          id="companyAddress"
          labelFor="companyAddress"
          label="公司地址"
        />
        <Field
          styles={{ input: Styles.textarea }}
          component={FormInputField}
          textarea="true"
          type="text"
          name="personal"
          id="personal"
          labelFor="personal"
          label="个人简介"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>更&nbsp;&nbsp;新</Button>
      </form>
    )
  }
}

BasicForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import { updateUserActions } from '../../actions'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import validate from './validate'

const comp = reduxForm({
  form: 'basicForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  validate: validate(),
  onSubmit: onSubmitActions(updateUserActions),
})(BasicForm)

import { selectEmails, selectMobiles } from '../../selectors'

const mapStateToProps = state => ({
  emails: selectEmails(state),
  mobiles: selectMobiles(state),
})

export default connect(mapStateToProps)(comp)

