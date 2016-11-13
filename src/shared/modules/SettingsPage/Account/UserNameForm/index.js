import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Styles from './index.css'
import FormInputField from '../../../FormInputField'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import { Button } from 'react-bootstrap'

class UserNameForm extends Component {
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
      <form onSubmit={handleSubmit}>
        <Field
          styles={{ input: Styles.input }}
          name="username"
          type="text"
          id="username"
          component={FormInputField}
        />
        <Button bsStyle="default" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>更新用户名</Button>
      </form>
    )
  }
}

UserNameForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
}

import { updateUserActions } from '../../actions'

const comp = reduxForm({
  form: 'userNameForm',
  onSubmit: onSubmitActions(updateUserActions),
})(UserNameForm)

const initialValues = {}

const mapStateToProps = () => ({
  initialValues,
})

export default connect(mapStateToProps)(comp)

