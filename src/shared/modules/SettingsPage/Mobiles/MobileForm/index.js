import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import FormInputField from '../../../FormInputField'
import Styles from './index.css'

class MobileForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit} className={Styles.MobileForm}>
        <Field
          styles={{ input: Styles.input }}
          name="mobile"
          type="text"
          id="mobile"
          component={FormInputField}
          label="添加手机"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>添&nbsp;加</Button>
      </form>
    )
  }
}

MobileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import { addMobileActions } from '../../actions'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import validate from './validate'

const comp = reduxForm({
  form: 'mobileForm',
  validate: validate(),
  onSubmit: onSubmitActions(addMobileActions),
})(MobileForm)

export default connect()(comp)

