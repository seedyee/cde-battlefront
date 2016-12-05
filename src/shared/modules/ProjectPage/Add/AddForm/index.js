import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import FormInputField from '../../../FormInputField'
import Styles from './index.css'

class AddForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit} className={Styles.AddForm}>
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="text"
          name="owns"
          id="owns"
          labelFor="owns"
          label="项目所有者"
        />
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="text"
          name="name"
          id="name"
          labelFor="name"
          label="项目名称"
        />
        <Field
          styles={{ input: Styles.textarea }}
          component={FormInputField}
          textarea="true"
          name="introduction"
          id="introduction"
          labelFor="introduction"
          label="项目简介"
        />
        <div className={Styles.radioDiv}>
          <Field name="public" component="input" type="radio" value="public" /><label htmlFor="public" className={Styles.radio}>公开</label>
          <Field name="public" component="input" type="radio" value="private" /><label htmlFor="private" className={Styles.radio}>私有</label>
        </div>
        <div className={Styles.checkboxDiv}>
          <Field name="initialize" id="initialize" component="input" type="checkbox" /><label htmlFor="initialize" className={Styles.radio}>启用README.md文件初始化项目</label>
        </div>
        <div className={Styles.selectDiv}>
          <Field name="favoriteColor" component="select" className={Styles.select}>
            <option>添加开源许可证</option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
          <Field name="favoriteColor" component="select" className={Styles.select}>
            <option>添加.gitignore文件</option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
        <div className={Styles.membersDiv}>
          <label htmlFor="members">添加成员: </label>
          <Field name="members" component="input" type="text" placeholder="用户名/邮箱" className={Styles.membersInput} />
          <div>张三、李四</div>
        </div>
        <Button bsStyle="success" className={Styles.submitBtn} type="submit" disabled={pristine || submitting}>创建项目</Button>
      </form>
    )
  }
}

AddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

const comp = reduxForm({
  form: 'addForm',
})(AddForm)

export default connect()(comp)

