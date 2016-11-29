import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Button } from 'react-bootstrap'

import FormInputField from '../../../FormInputField'
import Styles from './index.css'

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
    const { handleSubmit, pristine, submitting, logined } = this.props
    const { redirectTo } = this.state
    if (logined) return <Redirect to="/dashboard" />
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
      <form onSubmit={handleSubmit} className={Styles.signInForm}>
        <h2> 开发平台 | 登录 </h2>
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="text"
          name="principal"
          id="principal"
          labelFor="principal"
          label="用户名 / 邮箱"
        />
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="password"
          name="password"
          id="password"
          labelFor="password"
          label="密 码"
          forgetPassword="忘记密码 ?"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>登 录</Button>
        <p className={Styles.signIn}>
          无账号 ?
          <button className={Styles.regBtn} disabled={submitting} type="button" onClick={this.redirectTo}>注 册</button>
        </p>
      </form>
    )
  }
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  logined: PropTypes.bool.isRequired,
}

import { selectLogined } from '../../selectors'
import { loginActions } from '../../actions'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import validate from '../../../utils/validate'

const comp = reduxForm({
  form: 'LoginForm',
  validate: validate(),
  onSubmit: onSubmitActions(loginActions),
})(SignInForm)

const mapStateToProps = (state) => ({
  logined: selectLogined(state),
})

export default connect(mapStateToProps)(comp)
