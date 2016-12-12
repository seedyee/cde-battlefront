import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap'

import FormInputField from '../../../FormInputField'
import Styles from './index.css'

class RegisterForm extends Component {
  constructor() {
    super()
    this.state = {
      redirectTo: null,
    }
  }

  redirectTo = () => {
    this.setState({ redirectTo: '/signIn' })
  }

  render() {
    const { handleSubmit, pristine, submitting, logined } = this.props
    const { redirectTo } = this.state
    if (logined) return <Redirect to="/dashboard" />
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
      <form onSubmit={handleSubmit} className={Styles.signUpForm}>
        <h2>用户注册</h2>
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="text"
          name="username"
          id="username"
          labelFor="username"
          label="用户名"
        />
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="email"
          name="email"
          id="email"
          labelFor="email"
          label="邮 箱"
        />
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="password"
          name="password"
          id="password"
          labelFor="password"
          label="密 码"
        />
        <div>
          <Field name="agreement" id="agreement" component="input" type="checkbox" />
          <label htmlFor="agreement" className={Styles.agreement}>同意<a href="">《开发平台协议》</a></label>
        </div>
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>注册</Button>
        <p className={Styles.signUp}>
          <button className={Styles.regBtn} type="button" disabled={submitting} onClick={this.redirectTo}>已有账户？马上登录</button>
        </p>
      </form>
    )
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  logined: PropTypes.bool.isRequired,
}

import { selectLogined } from '../../selectors'
import { registerActions } from '../../actions'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import validate from '../../../utils/validate'

const comp = reduxForm({
  form: 'RegisterForm',
  validate: validate(),
  onSubmit: onSubmitActions(registerActions),
})(RegisterForm)

const mapStateToProps = (state) => ({
  logined: selectLogined(state),
})

export default connect(mapStateToProps)(comp)

