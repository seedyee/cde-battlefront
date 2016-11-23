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
          name="email"
          type="text"
          id="email"
          component={FormInputField}
          label="添加邮箱"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>添&nbsp;加</Button>
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

