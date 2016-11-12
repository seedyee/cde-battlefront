import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import validate from '../../../utils/validate'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import Styles from './index.css'
import FormInputField from '../../../FormInputField'
import { Button } from 'react-bootstrap'

class SignInForm extends Component {
  constructor() {
    super()
    this.state = {
      redirectTo: null,
    }
  }

  redirectTo = () => {
    this.setState({ redirectTo: '/signUp' })
  }

  render() {
    const { handleSubmit, submitting, pristine, logined } = this.props
    const { redirectTo } = this.state
    if (logined) return <Redirect to="/dashboard" />
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
      <form onSubmit={handleSubmit} className={Styles.signInForm}>
        <Field
          name="email"
          labelFor="email"
          id="email"
          component={FormInputField}
          label="Email/Phone"
          type="email"
        />
        <Field
          name="password"
          id="password"
          labelFor="password"
          component={FormInputField}
          label="Password"
          type="password"
          forgetPassword="Forget your password ?"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>Submit</Button>
        <button className={Styles.signUp} disabled={submitting} type="button" onClick={this.redirectTo}>Sign up</button>
      </form>
    )
  }
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  logined: PropTypes.bool.isRequired,
}

import { selectLogined } from '../../selectors'
import { loginActions } from '../../actions'

const comp = reduxForm({
  form: 'LoginForm', // a unique name for this form
  validate: validate(),
  onSubmit: onSubmitActions(loginActions),
})(SignInForm)

const initialValues = {
}

const mapStateToProps = (state) => ({ // eslint-disable-line no-unused-vars
  initialValues,
  logined: selectLogined(state),
})

export default connect(mapStateToProps)(comp)