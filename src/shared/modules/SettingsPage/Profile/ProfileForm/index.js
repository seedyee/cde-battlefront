import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Styles from './index.css'
import FormInputField from '../../../FormInputField'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import { Button } from 'react-bootstrap'

class ProfileForm extends Component {
  constructor() {
    super()
    this.state = {
      redirectTo: null,
    }
  }

  redirectTo = () => {
    this.setState({ redirectTo: '/settings/profile' })
  }

  render() {
    const { redirectTo } = this.state
    const { handleSubmit, pristine, submitting } = this.props
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
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
    )
  }
}

ProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import { updateUserActions } from '../../actions'

const comp = reduxForm({
  form: 'profileForm',
  onSubmit: onSubmitActions(updateUserActions),
})(ProfileForm)

const initialValues = {}

const mapStateToProps = () => ({
  initialValues,
})

export default connect(mapStateToProps)(comp)

