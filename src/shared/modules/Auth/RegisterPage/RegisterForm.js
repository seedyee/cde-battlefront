import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import validate from '../validate'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import Styles from './registerForm.css'
import { Button } from 'react-bootstrap'
import FormInputField from '../../FormInputField'

class RegisterForm extends Component {
  constructor() {
    super()
    this.state = {
      redirectTo: null,
    }
  }

  redirectTo = () => {
    this.setState({ redirectTo: '/login' })
  }

  render() {
    const { handleSubmit, submitting, pristine, logined } = this.props
    const { redirectTo } = this.state
    if (logined) return <Redirect to="/dashboard" />
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
      <form onSubmit={handleSubmit} className={Styles.RegisterForm}>
        <h2> 开发平台 | 注册 </h2>
        <Field
          name="email"
          type="email"
          id="email"
          component={FormInputField}
          label="Email (phone for mobile accounts)"
        />
        <Field
          name="username"
          type="text"
          id="username"
          component={FormInputField}
          label="Username"
        />
        <Field
          name="password"
          id="password"
          component={FormInputField}
          label="Password"
          type="password"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>Sigin up</Button>
        <p className={Styles.signIn}>
          Already have an account?
          <button type="button" disabled={submitting} onClick={this.redirectTo}>Sign in</button>
        </p>
      </form>
    )
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  logined: PropTypes.bool.isRequired,
}

import { selectLogined } from '../selectors'
import { registerActions } from '../actions'

const comp = reduxForm({
  form: 'RegisterForm', // a unique name for this form
  validate: validate({ register: true }),
  onSubmit: onSubmitActions(registerActions),
})(RegisterForm)

const mapStateToProps = (state) => ({
  logined: selectLogined(state),
})

export default connect(mapStateToProps)(comp)

