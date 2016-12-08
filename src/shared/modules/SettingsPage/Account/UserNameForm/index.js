import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import FormInputField from '../../../FormInputField'
import Styles from './index.css'

class UserNameForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit} className={Styles.UserNameForm}>
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="text"
          name="name"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting} >更新用户名</Button>
      </form>
    )
  }
}

UserNameForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import { updateUserActions } from '../../actions'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import validate from './validate'

const comp = reduxForm({
  form: 'userNameForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  validate: validate(),
  onSubmit: onSubmitActions(updateUserActions),
})(UserNameForm)

export default connect()(comp)

