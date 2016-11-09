import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../../utils/validate'
import Styles from './profile.css'
import { Button } from 'react-bootstrap'
import FormInputField from '../../FormInputField'

const Profile = ({ handleSubmit, submitting, pristine }) => {
  return (
    <div className={Styles.profile}>
      <form onSubmit={handleSubmit} className={Styles.RegisterForm}>
        <Field
          name="username"
          type="text"
          id="username"
          component={FormInputField}
          label="用户名"
        />
        <Field
          name="email"
          type="email"
          id="email"
          component={FormInputField}
          label="邮箱"
        />
        <Field
          name="mobile"
          type="mobile"
          id="mobile"
          component={FormInputField}
          label="手机"
        />
        <Field
          name="company"
          type="text"
          id="company"
          component={FormInputField}
          label="公司"
        />
        <Field
          name="location"
          type="text"
          id="location"
          component={FormInputField}
          label="地址"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>Sigin up</Button>
        <p className={Styles.signIn}>
          Already have an account?
          <button type="button" disabled={submitting} onClick={this.redirectTo}>Sign in</button>
        </p>
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

