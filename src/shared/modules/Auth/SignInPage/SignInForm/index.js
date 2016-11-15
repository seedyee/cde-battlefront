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
          styles={{ input: Styles.input }}
          name="email"
          labelFor="email"
          id="email"
          component={FormInputField}
          label="邮箱 / 手机"
          type="email"
        />
        <Field
          styles={{ input: Styles.input }}
          name="password"
          id="password"
          labelFor="password"
          component={FormInputField}
          label="密 码"
          type="password"
          forgetPassword="忘记密码 ?"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>登 录</Button>
        <p className={Styles.signIn}>
          无账号 ?
          <button disabled={submitting} type="button" onClick={this.redirectTo}>注 册</button>
        </p>
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
