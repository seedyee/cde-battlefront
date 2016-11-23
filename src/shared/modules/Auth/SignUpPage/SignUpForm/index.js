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
        <h2> 开发平台 | 注册 </h2>
        <Field
          styles={{ input: Styles.input }}
          name="email"
          type="email"
          id="email"
          component={FormInputField}
          label="邮 箱"
        />
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
          name="password"
          id="password"
          component={FormInputField}
          label="密 码"
          type="password"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>注&nbsp;&nbsp;册</Button>
        <p className={Styles.signUp}>
          已注册 ?
          <button className={Styles.regBtn} type="button" disabled={submitting} onClick={this.redirectTo}>登&nbsp;录</button>
        </p>
      </form>
    )
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
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

