import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Styles from './index.css'
import FormInputField from '../../../FormInputField'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import { Button } from 'react-bootstrap'

class UserNameForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit} className={Styles.UserNameForm}>
        <Field
          styles={{ input: Styles.input }}
          name="realName"
          type="text"
          id="realName"
          component={FormInputField}
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting} >更新用户名</Button>
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

export default connect()(comp)

