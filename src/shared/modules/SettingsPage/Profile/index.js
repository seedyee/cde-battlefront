import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../../utils/validate'
import Styles from './index.css'
import { Button } from 'react-bootstrap'
import FormInputField from '../../FormInputField'

const Profile = ({ handleSubmit, submitting, pristine }) => {
  return (
    <div className={Styles.Profile}>
      <h3>基本信息</h3>
      <form onSubmit={handleSubmit} className={Styles.RegisterForm}>
        <Field
          styles={{ input: Styles.input }}
          name="username"
          type="text"
          id="username"
          component={FormInputField}
          label="用户名"
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
        <Button bsStyle="default" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>更新</Button>
      </form>
    </div>
  )
}

Profile.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
}

export default reduxForm({
  form: 'RegisterForm', // a unique name for this form
  /* validate: validate({ register: true }),*/
})(Profile)

