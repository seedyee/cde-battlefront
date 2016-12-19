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
        <Button
          type="submit"
          bsStyle="success"
          className={Styles.submitBtn}
          disabled={pristine || submitting}
        >
        更新用户名
        </Button>
      </form>
    )
  }
}

UserNameForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import { updateNameActions } from '../../actions'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import validate from './validate'

const comp = reduxForm({
  form: 'userNameForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  validate: validate(),
  onSubmit: onSubmitActions(updateNameActions),
})(UserNameForm)

export default connect()(comp)

