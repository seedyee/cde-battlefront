import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Styles from './index.css'
import FormInputField from '../../../FormInputField'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import { Button } from 'react-bootstrap'

class EmailForm extends Component {
  render() {
    const { handleSubmit, submitting } = this.props
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
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={submitting}>添&nbsp;加</Button>
      </form>
    )
  }
}

EmailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import validate from '../../../utils/validate'
import { addEmailActions } from '../../actions'

const comp = reduxForm({
  form: 'emailForm',
  validate: validate({ register: true }),
  onSubmit: onSubmitActions(addEmailActions),
})(EmailForm)

export default connect()(comp)

