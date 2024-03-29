import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import FormInputField from '../../../FormInputField'
import Styles from './index.css'

class EmailForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit} className={Styles.EmailForm}>
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="email"
          name="email"
          id="email"
          labelFor="email"
          label="添加邮箱"
        />
        <Button
          type="submit"
          bsStyle="success"
          className={Styles.submitBtn}
          disabled={pristine || submitting}
        >
          添加
        </Button>
      </form>
    )
  }
}

EmailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import { addEmailActions } from '../../actions'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import validate from './validate'

const comp = reduxForm({
  form: 'emailForm',
  validate: validate(),
  onSubmit: onSubmitActions(addEmailActions),
})(EmailForm)

export default connect()(comp)

