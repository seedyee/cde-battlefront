import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Styles from './index.css'
import FormInputField from '../../../FormInputField'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'
import { Button } from 'react-bootstrap'

class EmailForm extends Component {
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
    const { handleSubmit, submitting } = this.props
    if (redirectTo) return <Redirect to={redirectTo} />
    return (
      <form onSubmit={handleSubmit}>
        <Field
          styles={{ input: Styles.input }}
          name="email"
          type="text"
          id="email"
          component={FormInputField}
          label="邮箱地址"
        />
        <Button bsStyle="default" className={Styles.submitBtn} type="submit" disabled={submitting}>添加邮箱</Button>
      </form>
    )
  }
}

EmailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import { addEmailActions } from '../../actions'

const comp = reduxForm({
  form: 'emailForm',
  onSubmit: onSubmitActions(addEmailActions),
})(EmailForm)

const initialValues = {}

const mapStateToProps = () => ({
  initialValues,
})

export default connect(mapStateToProps)(comp)

