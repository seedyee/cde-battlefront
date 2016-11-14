import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Styles from './index.css'
import FormInputField from '../../../FormInputField'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import { Button } from 'react-bootstrap'

class MobileForm extends Component {
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
      <form onSubmit={handleSubmit} className={Styles.MobileForm}>
        <Field
          styles={{ input: Styles.input }}
          name="mobile"
          type="text"
          id="mobile"
          component={FormInputField}
          label="手机号码"
        />
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>添加手机</Button>
      </form>
    )
  }
}

MobileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
}

import validate from '../../../utils/validate'
import { updateMobileActions } from '../../actions'

const comp = reduxForm({
  form: 'mobileForm',
  validate: validate({ register: true }),
  onSubmit: onSubmitActions(updateMobileActions),
})(MobileForm)

const initialValues = {}

const mapStateToProps = () => ({
  initialValues,
})

export default connect(mapStateToProps)(comp)

