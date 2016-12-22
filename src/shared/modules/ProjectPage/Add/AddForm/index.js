import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Button, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'

import FormInputField from '../../../FormInputField'
import Styles from './index.css'

class AddForm extends Component {
  getIconAndState = (name) => (state) => (
    <OverlayTrigger placement="right" overlay={this.tooltip(state)}>
      <Glyphicon glyph={name} className={Styles.icon} />
    </OverlayTrigger>
  )

  tooltip = (state) => (
    <Tooltip id="tooltip"><strong className={Styles.tooltip}>{state}</strong></Tooltip>
  )

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit} className={Styles.AddForm}>
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="text"
          name="owner"
          id="owner"
          labelFor="owner"
          label="项目所有者"
          icon={this.getIconAndState('info-sign')('拥有项目改动所有权限')}
        />
        <Field
          styles={{ input: Styles.input }}
          component={FormInputField}
          type="text"
          name="projectName"
          id="projectName"
          labelFor="projectName"
          label="项目名称"
          icon={this.getIconAndState('info-sign')('优秀的项目名简洁和易记忆')}
        />
        <Field
          styles={{ input: Styles.textarea }}
          component={FormInputField}
          textarea="true"
          name="describe"
          id="describe"
          labelFor="describe"
          label="项目简介（可选）"
        />
        <div className={Styles.radioDiv}>
          <div>
            <Field
              component="input"
              type="radio"
              name="isPublic"
              value="true"
            />
            <label htmlFor="public" className={Styles.radio}>公开</label>
            <p className={Styles.radioState}>
              项目对所有访客可见，代码可以 fork，可以创建讨论，但是没有文件和任务功能
            </p>
          </div>
          <div>
            <Field
              component="input"
              type="radio"
              name="isPublic"
              value="false"
            />
            <label htmlFor="private" className={Styles.radio}>私有</label>
            <p className={Styles.radioState}>
              项目仅对成员可见，拥有代码仓库，创建讨论，上传文件，任务管理等功能
            </p>
          </div>
        </div>
        <div className={Styles.membersDiv}>
          <label htmlFor="members">添加成员: </label>
          <Field
            component="input"
            type="text"
            name="members"
            placeholder="用户名/邮箱"
            className={Styles.membersInput}
          />
          <div>张三、李四</div>
        </div>
        <Button
          type="submit"
          bsStyle="success"
          className={Styles.submitBtn}
          disabled={pristine || submitting}
        >
          创建项目
        </Button>
      </form>
    )
  }
}

AddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
}

import { addProjectActions } from '../../actions'
import { onSubmitActions } from '../../../utils/reduxFormSubmitSaga'

const comp = reduxForm({
  form: 'addForm',
  onSubmit: onSubmitActions(addProjectActions),
})(AddForm)

export default connect()(comp)

